# Issue Tracker 

![Issue Tracker]
![Laravel]
![React]


## Overview

**Issue Tracker** is a web-based application built with **Laravel** and **React** that helps teams to efficiently manage and resolve issues within projects. It provides an intuitive interface for logging, tracking, and resolving issues, along with features like real-time notifications, seamless integration with third-party tools, and collaborative workflows.

## Features

- **Easy Issue Tracking**: Quickly log and categorize issues with detailed descriptions, priority levels, and due dates.



## Installation

### Prerequisites

- **PHP** >= 11
- **Node.js** >= 18.x
- **Composer**
- **NPM or Yarn**
- **MySQL** or another compatible database

### Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/issue-tracker.git
    cd issue-tracker
    ```

2. **Install Laravel dependencies**

    ```bash
    composer install
    ```

3. **Install Node.js dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

4. **Create a copy of the `.env` file**

    ```bash
    cp .env.example .env
    ```

5. **Generate an application key**

    ```bash
    php artisan key:generate
    ```

6. **Set up the database**

    Update your `.env` file with your database credentials:

    ```dotenv
    DB_CONNECTION=sqllite
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=issue_tracker
    DB_USERNAME=root
    DB_PASSWORD=yourpassword
    ```

    Then, run the migrations:

    ```bash
    php artisan migrate
    ```

7. **Build the front-end assets**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

8. **Serve the application**

    ```bash
    php artisan serve
    ```

    The application will be accessible at `http://localhost:8000`.

## Usage

Once the application is running, you can start using the Issue Tracker by registering as a new user or logging in if you already have an account.

### Key Sections

- **Dashboard**: Overview of all issues, their statuses, and project summaries.
- **Issues**: Create, assign, and manage issues.
- **Projects**: Manage multiple projects and track their progress.


## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.



