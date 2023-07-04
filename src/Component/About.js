import React from 'react';
import styles from './About.module.css';
import BackBtn from './BackBtn';

const About = () => (
  <>
    <BackBtn />
    <div className={styles.about}>
      <h4> About Cryptofy</h4>
      <p>
        A web application that provides users with a comprehensive view of
        various cryptocurrency exchanges and their trading data.
        The dashboard allows users to browse
        and filter through a list of crypto exchanges, view exchange details,
        and access real-time trading information.
      </p>
      <h4>Features</h4>
      <ul className={styles.aboutlist}>
        <li>
          <strong>Cryptocurrency Exchange List:</strong>
          {' '}
          Display a list of cryptocurrency exchanges,
          including their name, rank, trading volume, and trading pairs.

        </li>

        <li>
          <strong>Search and Filter Functionality:</strong>
          {' '}
          Allow users to search for specific
          exchanges and filter the list based on criteria such as name, rank, or trading volume.

        </li>
        <li>
          <strong>Exchange Details: </strong>
          {' '}
          Provide detailed information about a selected
          exchange, including trading volume percentage, number of trading
          pairs, website URL, and last update timestamp.

        </li>
        <li>
          <strong>Favicon Integration: </strong>
          Display the favicon of each exchange,
          retrieved from their website URL.

        </li>
        <li>
          <strong>Responsive Design:</strong>
          {' '}
          Ensure the application is
          responsive and works seamlessly across different screen sizes,
          providing an optimal user experience on both desktop and mobile devices.

        </li>
      </ul>

      {' '}
      <h4>Tech Stack</h4>
      <p>
        <strong>React:</strong>
        {' '}
        JavaScript library for building the user interface components
        and managing the application state.
        <br />
        <strong>Redux:</strong>
        {' '}
        State management library for managing the global application state.
        <br />
        <strong> React Router: </strong>
        Library for handling client-side routing and navigation within
        the application.
        <br />
        <strong>React Bootstrap:</strong>
        UI library for styling and layout components.
        <br />
        <strong>CSS Grid:</strong>
        {' '}
        Utilize CSS Grid for creating responsive grid layouts.
        <br />
        <strong>API Integration:</strong>
        {' '}
        Fetch data from a backend API to retrieve and
        display the cryptocurrency exchange information.
      </p>
      {' '}
    </div>
  </>
);
export default About;
