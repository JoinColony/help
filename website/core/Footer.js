/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Get Started
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              FAQs
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://colony.io/colony/beta"
              target="_blank"
              rel="noopener">
              Betacolony
            </a>
            <a href="https://clny.io/discord"
              target="_blank"
              rel="noopener">
              Discord
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a
              href="https://twitter.com/joincolony"
              target="_blank"
              rel="noopener">
              Twitter
            </a>
            <a href="https://github.com/"
              target="_blank"
              rel="noopener">
              GitHub
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        <a
          href="https://colony.io"
          target="_blank"
          rel="noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/primary_horizontal_white.svg`}
            alt="Colony"
            width="170"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
