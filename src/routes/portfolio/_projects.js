import _ from 'lodash'
import all from '../../projects/*.md'


export const projects = _.chain(all) // begin a chain
                      .map(transform) // transform the shape of each post
                      .orderBy('order', 'desc') // sort by order descending
                      .value() // convert chain back to array

// function for reshaping each post
function transform(data) {
	const {filename, html, metadata} = data
  const slug = filename.replace(/\.md$/, '')

  // return the new shape
  return {...metadata, filename, html, slug}
}

// provide a way to find a post by permalink
export function findPost(slug) {
  // use lodash to find by field name:
  return _.find(projects, {slug})
}