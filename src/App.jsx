import React, { Component } from 'react';

import Head from './components/Head';
import About from './components/About';
import Fraternity from './components/Fraternity';
import Creed from './components/Creed';
import Members from './components/Members';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Sections for styling
import Section from './components/Section';
// Click to Scroll
import * as Scroll from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div>
        <Head />

        <Scroll.Element name="main">
          <main>
            <Section className="section">
              <About />
            </Section>

            <Section title="Fraternity" sectionClass="fraternity">
              <Fraternity />
            </Section>

            <Section title="Creed" sectionClass="creed">
              <Creed />
            </Section>

            <Section title="Philanthropy" sectionClass="philanthropy">
              <Philanthropy />
            </Section>

            <Section title="Members" sectionClass="members">
              <Members />
            </Section>

            <Section title="Events" sectionClass="events">
              <Events />
            </Section>

            <Section title="Contact" sectionClass="contact">
              <Contact />
            </Section>
          </main>
        </Scroll.Element>

        <Footer />
      </div>
    );
  }
}

export default App;
