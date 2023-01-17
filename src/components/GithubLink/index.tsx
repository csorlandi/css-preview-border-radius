import octocatCorner from '@/Assets/OctocatCorner.svg';

import './style.css';

export default function GithubLink() {
  return (
    <a className="github-link-container" href="https://github.com/csorlandi" target="_blank" rel="noreferrer">
      <img src={octocatCorner} alt="Logo do Github" />
    </a>
  );
}
