# Audio assets

The app expects this file:

```text
public/audio/moonlit-garden-path.mp3
```

It is the same filename used by the old `shengongji-h5-mvp` project.

The current connector can locate the old binary file but cannot reliably copy MP3 bytes through the text-only file API. Upload the MP3 from the old repository into this folder when binary upload is available, or upload it manually through GitHub web UI.

The app still works without the audio file; the music button simply cannot start playback until the file exists.
