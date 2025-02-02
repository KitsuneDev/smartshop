import cv2
import time
import platform
import requests
from pyzbar.pyzbar import decode

# Function to play a chime sound
def play_chime():
    if platform.system() == "Windows":
        import winsound
        winsound.Beep(1000, 500)  # Frequency: 1000 Hz, Duration: 500 ms
    else:
        # For non-Windows systems, use the playsound library or similar
        try:
            from playsound import playsound
            playsound('chime.mp3')  # Replace with the path to your sound file
        except ImportError:
            print("Chime sound requires the playsound library on non-Windows systems.")

# Function to send barcode data via HTTP GET request
def send_barcode_data(barcode_data):
    url = "https://smartshop-mauve.vercel.app/api/scanCode?id=" + barcode_data  # Replace with your actual endpoint
    try:
        response = requests.get(url)
        if response.status_code == 200:
            print(f"Successfully sent barcode data: {barcode_data}")
            print(response.text)
        else:
            print(f"Failed to send barcode data. Status code: {response.status_code}")
    except requests.RequestException as e:
        print(f"Error sending barcode data: {e}")

def scan_barcode():
    # Open the camera
    camera = cv2.VideoCapture(0)

    if not camera.isOpened():
        print("Error: Could not access the camera.")
        return

    print("Press 'q' to quit.")

    while True:
        # Capture frame-by-frame
        ret, frame = camera.read()

        if not ret:
            print("Error: Failed to capture frame.")
            break

        # Decode barcodes in the frame
        barcodes = decode(frame)

        # Draw rectangles and display the barcode data
        for barcode in barcodes:
            (x, y, w, h) = barcode.rect
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

            barcode_data = barcode.data.decode('utf-8')
            barcode_type = barcode.type

            text = f"{barcode_type}: {barcode_data}"
            cv2.putText(frame, text, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 2)
            print(f"Detected {barcode_type}: {barcode_data}")

            # Play a chime sound
            play_chime()

            # Send the barcode data via HTTP GET request
            send_barcode_data(barcode_data)

            # Wait 3 seconds before scanning the next barcode
            time.sleep(3)

        # Display the resulting frame
        cv2.imshow('Barcode Scanner', frame)

        # Break loop on 'q' key press
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the camera and close the window
    camera.release()
    cv2.destroyAllWindows()

# Run the barcode scanner
scan_barcode()