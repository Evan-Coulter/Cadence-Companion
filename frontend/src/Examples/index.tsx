import './Examples.css'

const Examples = () => {
  return (
  <section className='examples'>
    <div className='examples_inner'>
      <p className="examples_header">Examples</p>
      <ul className='examples_inner_content'>
        <li className='example'>
          <p className='example_title'>"Die For You (Remix)"</p>
          <p className='example_artist'>The Weeknd</p>
        </li>
        <li className='example'>
          <p className='example_title'>"Lavender Haze"</p>
          <p className='example_artist'>Taylor Swift</p>
        </li>
        <li className='example'>
          <p className='example_title'>"Circles"</p>
          <p className='example_artist'>Post Malone</p>
        </li>
      </ul>
      <ul className='examples_inner_content'>
        <li className='example'>
          <p className='example_title'>“Family Ties”</p>
          <p className='example_artist'>Kendrick Lamar</p>
        </li>
        <li className='example'>
          <p className='example_title'>“Look at the Sky”</p>
          <p className='example_artist'>Porter Robinson</p>
        </li>
        <li className='example'>
          <p className='example_title'>“Nights Like This”</p>
          <p className='example_artist'>Kehlani</p>
        </li>
      </ul>
    </div>
  </section>)
}

export default Examples