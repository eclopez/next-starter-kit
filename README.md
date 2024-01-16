# Next Starter Kit

My personal starter kit for Next.js projects.

## With Sanity.io

Steps to setup with your own Sanity.io project for local development:

1. Add your Sanity `projectId` to a `.env.local` file:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
   ```

2. In `sanity.config.ts`:

   - Change `title` to your own project's title
   - Change `dataset` to your own project's dataset name

3. Add `http://localhost:3000/` to your Sanity.io project's CORS Origins
