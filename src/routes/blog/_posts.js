import _ from 'lodash'
import all from '../../posts/*.md'


export const posts = _.chain(all) // begin a chain
                      .map(transform) // transform the shape of each post
                      .orderBy('date', 'desc') // sort by date descending
                      .value() // convert chain back to array

// function for reshaping each post
function transform(data) {
	const {filename, html, metadata} = data
  const slug = filename.replace(/\.md$/, '')

  // convert date string into a proper `Date`
  const date = new Date(metadata.date)
  // return the new shape
  return {...metadata, filename, html, slug, date}
}

// provide a way to find a post by permalink
export function findPost(slug) {
  // use lodash to find by field name:
  return _.find(posts, {slug})
}