export default function OrderedSection() {
  return (
    <section className="ordered-section">
      <h3>Steps to Contribute</h3>
      <ol>
        <li>
          Download the source files listed below to use as a reference to build
          your stylesheet, or start from the Sass template.
        </li>
        <li>
          Host your completed stylesheet at a public URL, and ensure all asset
          links are absolute URLs to external resources.
        </li>
        <li>
          Create a pull request to add your information as a unique .json file
          to: src/_data/styles. The schema is detailed in the repo README, and
          you can review the FAQ on creating a pull request.
        </li>
        <li>
          If your contribution abides by the previously listed guidelines, your
          submission will be added!
        </li>
      </ol>
    </section>
  );
}
