---
{
  id: "jcc-devops",
  layout: '../../../layouts/Portfolio.astro',
  scheme: "tech",
  title: "JCC: DevOps",
  description: "Deploying and managing dozens of sites.",
  pubDate: '2023-01-03',
  updatedDate: '2023-01-02',
  heroImage: "bg.png",
	teaserImage: "bg.png",
	bgColor: "dark",
}
---

> Great work by Calvin. He optimized our process an order of magnitude, making webservices’ job much easier. Backend tooling and processes isn’t glamorous, but I can see a lot of work went into the structure and the automation.”
>
> — **Ivan Bueno, Judicial Council of California - Technical Lead**

<details class="stack">
  <summary>About JCC</summary>

  _The Judicial Council of California is the largest judicial system in the US. Over the course of several years I had the opportunity to contribute to the development of the core platform that powers 50+ court websites and several other important legal resources for the people of California._

  _I worked with multiple stakeholders and as part of 2 development teams; the JCC internal dev team as well as a team from Chapter Three they hired to lead the architecting and development of the platform._
</details>

**Public Repo**: <a href="https://github.com/JudicialCouncilOfCalifornia/trialcourt" target="_blank" rel="nofollow noopener">GitHub: Judicial Council of California</a>

## My Contribution DevOps

My approach to DevOps begins with a flexible Git workflow. See documentation here: <a href="https://judicialcouncilofcalifornia.github.io/jcc_storybook/feature/COURTS-294--alerts-update/docs/?path=/docs/documentation-codemanagement--default" target="_blank" rel="nofollow noopener">Code Management</a>

### Unique Challenges

This project was destined for a flexible cloud hosting platform, but we were required to deploy our initial work to a rigid hosting platform that has a very opinionated way of doing things. This meant we had to be careful about how we set up our Git workflow and our deployment process.

I built our CI/CD pipeline and custom scripts to make the deployment process identical, regardless of the hosting platform. All that would be required to move from the inital hosting platform to a more flexible infrastructure would be some minor configuration changes to the deployment scripts.

This project was mainly a Drupal Multisite configuration, but the initial hosting platform required us to host each database in a separate platform instance, bypassing the platform's rigid deployment process. We needed to be able to deploy the same codebase to multiple instances on the hosting platform. Then with drush and some custom bash scripts we could manage each site independently or as a group. This enabled fleet wide maintenance tasks to be performed with a single command. It had to handle 50+ websites without changing the developer experince if/when the time came to move to a more flexible hosting platform.

Spinning up new sites can be done in under an hour. This gets you a new Drupal site preconfigured with the JCC installation profile, deployed on a fresh instance of the hosting platform. All ready for content migration or a content team to get to work.

We needed speed in the site build process so we could spin up and migrate content from existing sites while the existing sites were still active. Rapid deployment allowed us to get it done without a large period of time leading to content drift.
