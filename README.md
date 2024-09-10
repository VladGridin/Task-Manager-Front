This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About

Task Manager - web app, designed to help users manage their tasks and time.

## Functional

1. ### Authorization

   > There is an option to log in via email or via a Google account.
   > ![Auth page](/public/image/Auth.png)

2. ### User statistics

   > Displays data on user productivity, completed tasks. The user can see their dynamics and evaluate progress.
   > ![statistics page](/public/image/Dashboard.png)

3. ### User Tasks

   > Allows you to create, edit and delete tasks. Each task has different priority statuses, as well as task completion dates. Tasks can also be moved to postpone the deadline.
   > ![tasks page](/public/image/Tasks.png)

4. ### Pomodoro timer

   > The built-in timer, based on the Pomodoro technique, helps the user work more efficiently by breaking the work process into intervals with short breaks. The user can adjust the duration of sessions and breaks in the settings.
   > ![pomodoro timer](/public/image/Pomodoro%20Timer.png)

5. ### Time Blocking

   > Allows the user to plan their day by adding tasks to specific time slots. This helps to structure the workday and improve time management.
   > ![time blocking page](/public/image/Time%20blocking.png)

6. ### Settings
   > In the settings, the user can change: Avatar, Name, Email, Password. And change settings pomodoro timer.
   > ![settings page](/public/image/Settings.png)

## Getting Started

First, create an application in firebase. Then add authentication by google. Move the config file from firebase to env file

Run the development server in :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000/i](http://localhost:3000/i) with your browser to see the result.

## Technologies

- Frontend: Next js, TailwindCss, Sass, firebase, react day picker, lucide icon, dayjs, axios, dnd kit, tanstack query, sonner
- Backend: Nest js, passport jwt, firebase admin, argon, prisma
- Database: PostgreSQL
