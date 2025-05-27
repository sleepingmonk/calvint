---
{
  id: "jcc-migration",
  layout: '../../../layouts/Portfolio.astro',
  scheme: "tech",
  title: "JCC: Migration",
  description: "Migrating 50+ RedDot sites to Drupal.",
  pubDate: '2023-01-01',
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


## Content Migration

One of the biggest challenges was migrating content from the old system (Red Dot) to the new. As they had no way to export content from the old system in a structured way, we had to develop a custom migration strategy to ensure that everything was transferred correctly.

We ended up writing a custom web crawler to extract content from a site and clean it up a little before using Drupal's migration tools to clean it up some more and import it into our structured content types.

### My Contribution to Content Migration

I was very familiar with content migration in Drupal 8+ from the Pokemon project so I was tasked to solve these unique challenges. As we were not always going to have a clear page structure in the HTML scraped from the old sites, we designed our Drupal content types to use the standard body field as a catch all were we could dump the scraped page content for a quick initial migration.

We could reliably clean up most of the markup without too much effort. Migrating it to the body field gave us basic content structure which would take on the styling of the new site. Content editors could later review and convert these pages to the new data structures provided by fielded Drupal entities, if needed.

This approach allowed us to spin up and migrate a new site to Drupal in a matter of an hour or two, including the scrape of the old site.

We usually also needed to migrate a large number of PDF documents. This posed an additional challenge of managing them with Drupal Media Entities, and replacing all existing links to them with the new Drupal internal paths, wherever these links existed in the scraped content. It took some time to capture all the nuances of this and refine the process, but once I got it it served us reliably.

