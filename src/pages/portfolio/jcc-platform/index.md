---
{
  id: "jcc-platform",
  layout: '../../../layouts/Portfolio.astro',
  scheme: "tech",
  title: "JCC: Platform",
  description: "Building a scalable platform.",
  pubDate: '2023-01-02',
  updatedDate: '2023-01-01',
  heroImage: "bg.png",
	teaserImage: "bg.png",
	bgColor: "dark",
}
---

<details class="stack">
  <summary>About JCC</summary>

  _The Judicial Council of California is the largest judicial system in the US. Over the course of several years I had the opportunity to contribute to the development of the core platform that powers 50+ court websites and several other important legal resources for the people of California._

  _I worked with multiple stakeholders and as part of 2 development teams; the JCC internal dev team as well as a team from Chapter Three they hired to lead the architecting and development of the platform._
</details>

We're able to spin up a new Drupal site and migrate its content in, in under an hour. This platform now hosts more than 50 trial court sites, and several other important legal resources for the people of California.

<a href="https://webservices.courts.ca.gov" target="_blank" rel="nofollow noopener">JCC: Web Services</a> - I was a major contributor to all the technical initiatives outlined on this site, as well as all the sites in their "Universe of Sites", including the Web Services site itself which employs the component library described <a href="/portfolio/jcc-components">here</a> and runs on the platform described on this page.

GitHub: <a href="https://github.com/JudicialCouncilOfCalifornia/trialcourt" target="_blank" rel="nofollow noopener">Judicial Council of California</a>

## The Core

At the heart of the platform is <a href="https://new.drupal.org/about/overview/technical" target="_blank" rel="nofollow noopener">Drupal</a>, an opensource framework behind millions of websites. I've been working with Drupal since 4.3 in 2003. It was great then and it's come a very long way since.


The implementation for JCC needed to support a large number of distinct sites and be easy to manage by a small team. We needed to be flexible enough to host anywhere including a fairly rigid hosting platform.


### My Contribution to the Core

Aside from standard Drupal development duties, building and themeing the content structures, I lead the project's strategy for standardizing configuration. The policy was to deliver a stable and uniform set of features to dozens of websites, and be opensource and flexible for third party adoption. Standardization and customization are a little at odds, so we rely on governance to be wary of the scope of the project and any internal services planning to use it. While we provide an installation profile to get all sites started with an identical set of features, the nature of Drupal allows anyone to customize from there. We developed internal processes for incorporating changes into the profile, and for managing exceptions efficiently.
