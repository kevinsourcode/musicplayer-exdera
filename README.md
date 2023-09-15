# EXDERA MUSIC PLAYER

Project built using React + Vite and Tailwind CSS for styling.

---

## HOW TO RUN THE PROJECT

- clone the repository
- cd into the folder
- run 'npm install'
- after the installation, run 'npm run dev'
- the project should be runnning on your localhost.

## folder structure

- the SPA mainly uses the App component as its Root.
- All the components required have been created inside 'src/components'
- The 'src/assets' file mainly contains the background, mp3 file for playing music, and some image assets.
- a data folder has been created which contains the json data of the songs and its metadata.

## how to setup json-server

- just create 3 new terminal instances and run the following commands
  - npx json-server --watch data/TopMusic.json --port 8000
  - npx json-server --watch data/Popular.json --port 8001
  - npx json-server --watch data/Recommended.json --port 8002

---

### a single song was used for playing music inside the app, this can easily be pointed to other songs on the database. press the play button to play the music

### showing the respective song title, artist, and album art would've been easier if a global state management library would have been used. But because of time constraints that has been implmented for Top Music only.

### svgs and absolute values have been used to make the project closely resemble to the XD File.

# Screenshots

(image.png)
