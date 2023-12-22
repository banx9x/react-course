import { formatTime } from '../../lib/format-time';
import { usePlayer } from '../hooks/usePlayer';
import {
  RiVolumeMuteLine,
  RiVolumeDownLine,
  RiVolumeUpLine,
} from 'react-icons/ri';

function Player() {
  const {
    playing,
    currentSong,
    currentTime,
    volume,
    isLoop,
    isShuffle,
    audioRef,
    onPlay,
    onPause,
    onNext,
    onPrev,
    onTimeUpdate,
    onShuffle,
    onLoop,
    onEnded,
    onMouseDown,
    onMouseUp,
    onCurrentTimeChange,
    onVolumeChange,
  } = usePlayer();

  return (
    <div>
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={(e) => onTimeUpdate(e.target.currentTime)}
        onEnded={onEnded}
      />

      <h1>{currentSong.title}</h1>
      <p>{currentSong.artist}</p>

      <div>
        <span>{formatTime(currentTime)}</span>
        <input
          type='range'
          name=''
          id=''
          min={0}
          max={currentSong.duration}
          step={1}
          value={currentTime}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onChange={onCurrentTimeChange}
        />
        <span>{formatTime(currentSong.duration)}</span>
      </div>

      <div>
        <button
          className={isShuffle ? 'active' : ''}
          onClick={onShuffle}>
          Shuffle
        </button>
        <button onClick={onPrev}>Prev</button>
        <button onClick={playing ? onPause : onPlay}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button onClick={onNext}>Next</button>
        <button
          className={isLoop ? 'active' : ''}
          onClick={onLoop}>
          Loop
        </button>
      </div>

      <div>
        <span>
          {volume == 0 ? (
            <RiVolumeMuteLine />
          ) : volume < 0.5 ? (
            <RiVolumeDownLine />
          ) : (
            <RiVolumeUpLine />
          )}
        </span>
        <input
          type='range'
          name=''
          id=''
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={onVolumeChange}
        />
      </div>
    </div>
  );
}

export default Player;
