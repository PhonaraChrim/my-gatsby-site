// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      
      <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    </main>
  )
}

// Step 3: Export your component
export const Head = () => <title>About Me</title>
export default AboutPage