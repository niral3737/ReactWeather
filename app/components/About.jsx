var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on react. I have built it for complete react web app developer course.</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a>- This is the javascrit libarary which is used.</li>
      </ul>
    </div>
  );
}

module.exports = About;
