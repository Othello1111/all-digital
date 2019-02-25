import React, { Component } from 'react';
import { PageSection, Loading, LoadingCard } from 'all-digital-components';

class Buttons extends Component {
  render() {
    return (
      <div>
        <PageSection>
          <h1>Loading</h1>
          <hr />

          <h2>Description</h2>
          <p>The loading component can be used as a full page takeover with fixed position and a bg color. If it is nested within a page-section component, it will add the loading indicator centered within the page-section. See example below</p>

          <LoadingCard />
        </PageSection>

        <PageSection className="page-section--tall">
          <Loading />
        </PageSection>
      </div>
    );
  }
}

export default Buttons;
