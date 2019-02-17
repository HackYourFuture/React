import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import marked from 'marked';
import { API_PREFIX_URL } from './config';

export default class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, error: null };
  }

  getSlug() {
    if (this.props.match.params.slug) {
      return this.props.match.params.slug;
    } else {
      return 'index';
    }
  }

  async loadPage() {
    const slug = this.getSlug();
    const res = await fetch(`${API_PREFIX_URL}/${slug}`);
    const json = await res.json();
    if (json.status === 'ok') {
      this.setState({ page: json.page, isLoading: false });
    } else if (json.status === 'error') {
      this.setState({ error: json.error, isLoading: false });
    } else {
      this.setState({ error: 'Unknown error', isLoading: false });
    }
  }

  componentWillMount() {
    this.loadPage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.loadPage();
    }
  }

  render() {
    const slug = this.getSlug();
    const { isLoading, page, error } = this.state;
    if (isLoading) { return <p className="loading">Loading...</p> };
    if (error) { return <p className="error">{ error }</p> };
    const html = { __html: marked(page.body) };
    return (
      <div className="page">
        <h1>{ page.title }</h1>
        <div className="content" dangerouslySetInnerHTML={html} />
        <div className="page__actions">
          <Link to={`edit/${slug}`}>Edit Page</Link>
        </div>
      </div>
     );
  }
}
