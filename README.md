# ReactJS Front-end for Payfazz plugin

ReactJS front-end to display data from Wordpress REST API

### Installation
- Install packages
  - `yarn install`

- Customize constants in src/lib/constants folder
  - POSTS_API_URL = <wordpress-installation-directory>/wp-json/wp/v2/payfazz/ (get all entries in Payfazz custom posts)
  - POST_API_URL = <wordpress-installation-directory>/wp-json/wp/v2/payfazz?slug= (get single entry in Payfazz custom posts)
-- RELATED_POSTS_API_URL = <wordpress-installation-directory>/wp-json/wp/v2/payfazz?payfazz_categories= (get all entries with the same categories in Payfazz custom posts)

- Start app in dev mode
  - `yarn dev`