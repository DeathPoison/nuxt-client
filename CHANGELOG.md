# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Allowed Types of change: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`

## Unreleased

### Added

- SC-6293 - restricts Lern-Store access by permission

### Fixed

- SC-6293 - loads full permissions for user, e.g. school permission too, not just the ones on his role

### Changed

- SC-6060 Updated caniuse-lite

## 25.2.0

### Changed

- SC-7381 - Changed the consent get request limit to the lenght of selectedStudents

### Fixed

- SC-7339 - Fixed consent permission to STUDENT_EDIT from STUDENT_CREATE, which was not allowing teachers to access the bulkconsent action
- SC-7198 - fixes links in login page
- SC-6549 - Added missing Help section in sidebar
- SC-6357: Fixed the bouble loading issue in admin tables when changing the number of elements to display
- SC-6831 Fixes search/clear icons behaviour in lernstore

## 25.0.2

- SC-6932 added translation keys instead of hardcoded strings for sidebar items

## 25.0.1

## 25.0.0

- SC-6628 Changing backend url endpoint while analog consenting
- SC-6682 Reduces search time in lernstore
- SC-6021 Added fallback icons to the assets directory that are rendered when no external icons are available (fix for the EdgeHTML browser)

## [24.5.0] - 2020-09-14

### Changed

- SC-6474 in admin tables, edit column key is filtered out of column data object if school is external

## [24.4.1] - 2020-09-08

- SC-6701 - changed domain for ghost (mint-ec pages)

## [24.4.0] - 2020-08-31

- SC-5410 language dropdown in account page for selecting user language

## [24.3.0] - 2020-08-25

## [24.2.3] - 2020-08-19

### Changed - 24.2.1

- SC-6239 Changed default email domains in many different places from @schul-cloud.org to @hpi-schul-cloud.de
- SC-6239 Changed links to blog to blog.hpi-schul-cloud.de

## [23.6.0] - 2020-07-21

### Changed

- SC-5558 change the edusharing lernstore empty state and initial state components. Made svg images specific to the theme

- SC-6022 Change of the 'Einverständnis' column name to the 'Registrierung' in the teachers admin table.

### Added - 23.6.0

- Quickfix - change URL of 'Fortbildungen' from 'lern.cloud' to 'lernen.cloud'
- SC-4577 school specific privacy policy can be added by the school admin. If school specific privacy policy is exists it is shown to every school user by the registration, first login and in the footer of the page. If it was changed the privacy policy should be confirmed by every school user
- SC-2763 [#1084](https://github.com/schul-cloud/nuxt-client/pull/1084) Learnstore: use edu sharing content, implemented add material to the course feature, clickable tags, authors, providers

## ## [23.5.2] - 2020-07-17

- SC-5653 update mint-ec email addresses

## ## [23.5.1] - 2020-07-09

- SC-5494 Changed link in navigation bar
- SC-5529 update hpi school-cloud brand name

## ## [23.5.0] - 2020-06-21

### Changed in 23.5.0

- Upgrade to the 'new' Lern Store with a plus sign [#1054](https://github.com/schul-cloud/nuxt-client/pull/1054)
- Personalized dataprivacy policy for admin [#1035](https://github.com/schul-cloud/nuxt-client/pull/1035)
- Fix of unit tests in Nuxt client [#1028](https://github.com/schul-cloud/nuxt-client/pull/1028)

## ## [23.0.0] - 2020-05-19

### Changed in 23.0.0

- `controllableData`-mixin [#799](https://github.com/schul-cloud/nuxt-client/pull/799) as a helper for optionaly syncable props. Check [the documentation for more details](./docs/1-Tutorials/OptionalyPropControllableData.md).

## [22.10.0] - 2020.05.11

### Changed in 22.10.0

- `controllableData`-mixin [#799](https://github.com/schul-cloud/nuxt-client/pull/799) as a helper for optionaly syncable props. Check [the documentation for more details](./docs/1-Tutorials/OptionalyPropControllableData.md).

## [1.1.1]

### Changed

- New Legacy Client Fallback Routing - Read the new instructions [here](/1-Tutorials/FallbackRoutingForOldClient.md). For deployment of the nuxt client, almost all variables that where required before can be removed. There is no need anymore for env variables of the old client. But there are two new ones: `LEGACY_CLIENT_URL` and `PROXY_LOG_LEVEL`. You can find out more in our [build documentation](0-GettingStarted/1-Build.md#http://localhost:4002/0-GettingStarted/1-Build.html#environment-variables-runtime).

## [1.1.0]

### Changed

- New Atomic Design Directory Structure - We now organize our components in a new way. Read more [here](/0-GettingStarted/3-DirectoryStructure.md#src-components).
