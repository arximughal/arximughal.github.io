import React from 'react';
import Helmet from "react-helmet"

export default class SEO extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Helmet
        title={this.props.title}
        meta={[
          {
            name: `description`,
            content: this.props.metaDescription,
          },
          {
            property: `og:title`,
            content: this.props.title,
          },
          {
            property: `og:description`,
            content: this.props.metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: this.props.author,
          },
          {
            name: `twitter:title`,
            content: this.props.title,
          },
          {
            name: `twitter:description`,
            content: this.props.metaDescription,
          },
        ]}
      />
    );
  }
}
