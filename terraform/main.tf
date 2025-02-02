terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

variable "DATABASE_URL" {
  type = string
}
variable "APP_SECRET" {
  type = string
}
variable "APP_URL" {
  type = string
}
variable "VERCEL_TOKEN" {
  type = string

}

provider "vercel" {
  api_token = var.VERCEL_TOKEN
}

resource "vercel_project" "smartshopr" {
  name      = "smartshopr-vercel"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "KitsuneDev/smartshop"
  }
  root_directory = "backend"
  environment = [{
    key    = "DATABASE_URL"
    value  = var.DATABASE_URL
    target = ["production", "preview", "development"]
    }, {
    key    = "BETTER_AUTH_SECRET",
    value  = var.APP_SECRET
    target = ["production", "preview", "development"]
    }, {
    key    = "BETTER_AUTH_URL",
    value  = var.APP_URL
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_BETTER_AUTH_URL",
    value  = var.APP_URL
    target = ["production", "preview", "development"]
  }]
}
