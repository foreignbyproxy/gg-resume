# Block Renovation — Work Summary

**GitHub:** [@foreignbyproxy](https://github.com/foreignbyproxy) in [block-renovation](https://github.com/block-renovation)

## Overview

- Repos contributed to: 11
- PRs merged: 542
- Date range: Feb 2022 – Apr 2026

## Resume Bullets

### Systems/Integration Work
- Integrated marketing website with Contentful CMS to manage pages, SEO metadata, redirects, and sitemaps
- Migrated blog from WordPress to HubSpot and built a custom HubSpot theme with a component library for flexible page composition
- Maintained and upgraded a bidirectional Salesforce data integration supporting the Sales and Marketing teams
- Served as primary owner of analytics infrastructure across web and mobile — maintained the Segment workspace and its destinations including Google Analytics, Mixpanel, Snowflake, and Google Tag Manager, and led the migration to first-party domains to improve event quality and ad match rates
- Improved platform reliability and monitoring using Datadog and Sentry by building custom dashboards, monitors, and alerts
- Led migration of CI/CD pipeline from CircleCI to custom GitHub Actions runners
- Built a Customer.io component library for transactional and marketing emails

### Developer Experience
- Improved AI-driven development by authoring agentic coding rules to accelerate AI-assisted development across the team
- Led codebase health initiatives and major platform upgrades across 9 repos, including PNPM, Node.js v20→v24, and TypeScript upgrades, reducing build, test, and deploy times by 20%
- Built an internal developer CLI tool to automate common engineering tasks including AWS RDS credential generation and redirect management across third-party CMS platforms
- Collaborated with the Design team to build a design system with reusable components and tokens, and defined agentic rules to enforce consistent usage across the codebase

### Features Work
- Architected and authored the technical specification for a platform-wide pivot from single contractor assignment to a multi-contractor choice model, enabling homeowners to compare and select from matched proposals
- Architected AI-powered agentic chat and contextual project widgets (project summary, document upload, proposal comparison, contractor cards) embedded in the homeowner dashboard
- Implemented phone and email verification with NANP validation, throttling, and Twilio integration for fraud prevention
- Built a unified status system for the Contractor Dashboard, replacing a fragmented multi-stage UX with a single real-time project pipeline view
- Delivered the end-to-end Change Orders feature across web, mobile (React Native), and admin portal — enabling contractors to create, document, and collect payment for out-of-scope work
- Maintained SEO infrastructure including JSON-LD schema, sitemap generation for contractor profiles and customer galleries, and a Contentful A/B testing framework


## PR Volume by Repo

| Repo | PRs Merged |
|------|------------|
| block-mono | 369 |
| block-hubspot | 56 |
| block-web | 56 |
| block-native | 20 |
| block-admin | 19 |
| block-iac | 12 |
| docker-block-api-ci-builder | 3 |
| docker-block-web-ci-builder | 3 |
| block-cli | 2 |
| docker-block-api | 1 |
| docker-block-admin-ci-builder | 1 |

## By Repository

### block-mono (369 PRs)

- **2022-07-20** #4020 BLOCK-4561 - Add user properties to improve Facebook event matching
- **2022-08-25** #4170 Release/release v2.235.0
- **2022-10-28** #4410 BLOCK-4821 - Add endpoint to verifying ReCAPTCHA tokens
- **2023-05-09** #5243 GROW-685 - Add user's project type to AuthUser query
- **2024-01-03** #6555 GROW-1640 - Add CLOSED_LOST renovation planner dashboard state
- **2024-01-08** #6571 GROW-1656 - Dry run updates 2024-01-04
- **2024-01-08** #6580 GROW-1679 - Fixes work orders for Choice with Deposit - MASTER
- **2024-01-08** #6579 GROW-1679 - Fixes work orders for Choice with Deposit
- **2024-01-30** #6664 GROW-1767 - Fix Hubspot sitemap generator issue
- **2024-02-27** #6783 GROW-1979 - Add timezone to generateSiteVisitEventBookingContractorAppMessage - MASTER
- **2024-02-27** #6782 GROW-1979 - Add timezone to generateSiteVisitEventBookingContractorAppMessage
- **2024-02-29** #6791 DPS-909 - Update plannerSlackIDMap
- **2024-03-04** #6806 DPS-923 - Fix sale proposal task not completing on proposal publish
- **2024-03-06** #6813 GROW-2008 - Add REMOVED status to allowable statuses for renewal
- **2024-03-08** #6831 GROW-2025 - Update acceptance flow to set WOs to LOST
- **2024-03-18** #6860 GROW-2034 - Update projectMembers query to only return active contractors
- **2024-03-20** #6874 GROW-1831 - Refactor stream chat channel creation
- **2024-03-21** #6884 GROW-1831 - Move WorkOrderAcceptedEvent domain event
- **2024-09-03** #8187 HIRE-1071 - Add Contentful image optimizations
- **2024-12-17** #9362 [HIRE-2422] Update navigation
- **2025-01-07** #9460 [HIRE-2518] Refactor ProjectMap to accept an optional title
- **2025-01-09** #9475 HIRE-2529 - Marketing updates 2025-01
- **2025-01-17** #9572 [HIRE-2660] Refactor getCurrentProposal to handle current Block 2.0
- **2025-01-27** #9678 HIRE-2667 - Unmatched homeowner notification
- **2025-02-03** #9756 [HIRE-2692] Update marketing tracking
- **2025-02-04** #9770 HIRE-1835 - Re-implement first HO message tracking
- **2025-02-04** #9757 [HIRE-2702] Sync confirmed site survey date to Salesforce
- **2025-02-26** #9957 Hire-2908 - Refactor around PlannerSectionResponsesSend errors
- **2025-02-27** #9968 [HIRE-2922] Remove Hubspot related code on frontend
- **2025-02-27** #9975 [HIRE-2908] More adjustments to plannersectionresponsessend
- **2025-02-27** #9978 [HIRE-2908] Add temp input to test plannerSectionResponsesSend
- **2025-02-27** #9977 [HIRE-2713] Add proposalPdfGenerateAdmin mutation
- **2025-03-07** #10044 [HIRE-2973] Remove contractorProposalAcceptedPrice from Salesforce sync
- **2025-03-10** #10055 [HIRE-3096] Make input optional on consumer payment queries
- **2025-03-10** #10069 HIRE-2973 - Fix Salesforce room scope issues
- **2025-03-12** #10098 [HIRE-2999] Removes negative amount limit on submitChangeOrder
- **2025-03-13** #10103 HIRE-3122 - Implement no change orders view
- **2025-03-17** #10116 HIRE-3123 - ChangeOrders table
- **2025-03-24** #10190 HIRE-3124 - Create change order flow
- **2025-03-28** #10276 HIRE-3125 - Add rich text field to change order flow
- **2025-03-31** #10310 HIRE-3126 - Upload change order photos functionality
- **2025-04-01** #10318 HIRE-3126 add photos functionality
- **2025-04-03** #10355 HIRE-3334 - QA bug bash
- **2025-04-04** #10378 HIRE-3286 - Chicago pop up
- **2025-04-04** #10390 HIRE-334 - QA
- **2025-04-04** #10396 HIRE-3286 - Chicago QA
- **2025-04-07** #10397 HIRE-3084 - Replace Hubspot newsletter form with Customer.io form
- **2025-04-07** #10402 [HIRE-3334] Update CurrencyFieldV2 props and configuration
- **2025-04-08** #10407 HIRE-3102 - Payment schedule term adjustments
- **2025-04-08** #10411 HIRE-3444 - Fix type error on PayoutSchedule
- **2025-04-09** #10428 [HIRE-3453] - Fix bug in createPlannerRooms
- **2025-04-09** #10436 [HIRE-3137] Remove checks for CONTRACTOR_LED_CHANGE_ORDERS
- **2025-04-11** #10451 HIRE-3190 - Refactor the typography
- **2025-04-11** #10447 HIRE-2922 - Remove Husbpot integration
- **2025-04-11** #10464 [HIRE-2973] Update SalesforceLeadHandler
- **2025-04-14** #10471 HIRE-3463 - Remove typography v1
- **2025-04-15** #10494 [HIRE-3487] Remove unused icon/image assets
- **2025-04-15** #10457 [HIRE-2923] Refactor Google Maps script loading
- **2025-04-16** #10502 HIRE-3499 - Refactor expire work orders cron job
- **2025-04-16** #10500 [HIRE-3114] Add Tools and Plan links to navigation
- **2025-04-16** #10507 [HIRE-3114] Move Plan link to first item
- **2025-04-17** #10523 [HIRE-3506] Add Plan CTA option; Refactor CTA overrides;
- **2025-04-17** #10527 [HIRE-3316] Update link in the main nav for Plan landing page
- **2025-04-22** #10555 [HIRE-3524] Add Webinars and Press menu items
- **2025-04-23** #10567 [HIRE-3354] Refactor payment and payout schedule term selection
- **2025-04-23** #10578 [HIRE-3545] Fix newTab option to Contenful Grid component
- **2025-04-23** #10580 [HIRE-3552] Update axios logo
- **2025-04-29** #10620 [HIRE-3570] Fix Contentful link button style
- **2025-04-29** #10623 [HIRE-3565] Add support for custom location for map component
- **2025-04-29** #10618 HIRE-3547 - Add activity log
- **2025-04-30** #10634 [HIRE-3585] Add filter for isDummy to work order refresh
- **2025-04-30** #10638 HIRE-3561 - Add SEO info to Customer Galleries
- **2025-05-02** #10651 [HIRE-3561] Add slug to customer gallery
- **2025-05-05** #10663 Hire-3610 - Add exponential backoff for site survey date sync
- **2025-05-05** #10662 [HIRE-3588] Change Order activity logs
- **2025-05-05** #10660 [HIRE-3561] API updates for Customer Gallery refactor
- **2025-05-06** #10674 [HIRE-3431] Add Block Service fee reminder
- **2025-05-06** #10670 Update caniuse-lite
- **2025-05-06** #10668 HIRE-3561 - Customer gallery updates web
- **2025-05-06** #10680 [HIRE-3562] Fix bug in fetchRoomGalleryBySlug
- **2025-05-07** #10687 HIRE-3587 - Add payment related activity log entries
- **2025-05-07** #10697 [HIRE-3650] Fix and refactor Guides sitemap
- **2025-05-12** #10712 HIRE-3560 - Implement Contentful page A/B tests
- **2025-05-12** #10733 [HIRE-3670] Update Chicago modal copy
- **2025-05-12** #10735 [HIRE-3672] Adjust activity log for converting legacy projects
- **2025-05-13** #10738 [HIRE-3673] Update frontend MIxpanel
- **2025-05-13** #10729 [HIRE-3655] Add Customer Gallery URLs to site map
- **2025-05-13** #10743 [HIRE-3674] Restore deleted contractor project placeholder images
- **2025-05-14** #10746 HIRE-3680 - Fix Contentful issues and SEO update
- **2025-05-16** #10780 Update pull_request_template.md
- **2025-05-16** #10779 [HIRE-3734] Add additional details to async job logs
- **2025-05-19** #10776 [HIRE-3732] Update the navigation for AI and Kitchen LP
- **2025-05-20** #10792 [HIRE-3752] Update Sentry and implementation
- **2025-05-21** #10799 HIRE-3580 - Refactor Calendly integration endpoints
- **2025-05-22** #10813 HIRE-3580 - Refactor Calendly integration WEB
- **2025-05-23** #10829 [HIRE-3801] Remove unused FFs
- **2025-05-27** #10844 HIRE-3688 - Refactor Calendly integration for multiple projects
- **2025-05-27** #10854 [HIRE-3580] Fix getTaskByActionValue
- **2025-05-28** #10862 [HIRE-3811] Remove "Admin Sidebar - Legacy Key Date Endpoints"
- **2025-05-28** #10857 [HIRE-3809] Add NY local pages
- **2025-05-29** #10872 HIRE-3808 - Fix event booking infinite request
- **2025-05-29** #10882 [HIRE-3816] Remove "Auto apply margin discount" feature flag
- **2025-05-30** #10891 HIRE-3817 - Fix misc console errors
- **2025-05-30** #10902 [HIRE-3828] Remove use of AUTOMATED_CONTRACTOR_PAYMENTS
- **2025-06-02** #10909 HIRE03829 - Add endpoint for manual review scraping
- **2025-06-02** #10924 [HIRE-3834] Remove "Block 2.0 Market" from API
- **2025-06-02** #10930 [HIRE-3840] Remove "Block 2.0.1 MVP"
- **2025-06-02** #10927 [HIRE-3839] Add retry logic to aggregate chat message emails
- **2025-06-03** #10937 [HIRE-3844] Remove BREAK_GROUND_KEY_DATE_PREDICTION
- **2025-06-03** #10860 [HIRE-3795] Prefill scope on Scope item click
- **2025-06-04** #10948 [HIRE-3830] Add Async Job to scrape Google Reviews
- **2025-06-04** #10950 [HIRE-3855] Remove break ground scheduling FF
- **2025-06-04** #10956 [HIRE-3823] Refactor JSON+LD implementation
- **2025-06-05** #10965 [HIRE-3823] Fix JSON+LD
- **2025-06-05** #10966 [HIRE-3879] Add no index to catalog and contractor projects
- **2025-06-05** #10968 [HIRE-3881] Remove "Client Dashboard My Account"
- **2025-06-06** #10977 [HIRE-3930] Remove "Communications Skip Error On Non Existent Channel"
- **2025-06-09** #10976 HIRE-3908 - Add admin queries for review scraping
- **2025-06-09** #10985 HIRE-3935 - New urls for local landing pages
- **2025-06-10** #10996 HIRE-3937 - Add support for review files
- **2025-06-10** #11004 HIRE-3947 - Bug fixes
- **2025-06-10** #10999 [HIRE-3946] Remove contractor proposal discount notifications
- **2025-06-10** #11006 [HIRE-3948] Remove direct-product-offering-zipcodes
- **2025-06-11** #11022 HIRE-3790 - New Contentful Stats and Table modules
- **2025-06-11** #11024 [HIRE-3954] Update session reply rate
- **2025-06-16** #11031 HIRE-3803 - Add SSO to AccountCreationModal
- **2025-06-16** #11042 [HIRE-3790] Design QA for home page modules
- **2025-06-17** #11041 [HIRE-3968] Update Cypress dependencies
- **2025-06-20** #11054 [HIRE-3975] Add A/B test for home page
- **2025-06-23** #11078 [HIRE-3975] Home A/B fix
- **2025-06-24** #11091 HIRE-3987 - Plan Activiations
- **2025-06-25** #11099 [HIRE-3994] Refactor FetchRelevantMarketCodeInteractor
- **2025-06-25** #11102 [HIRE-3998] Remove "Contractor Request Feedback" feature flag
- **2025-06-25** #11101 HIRE-3800 - Remove old Calendly REST endpoints
- **2025-06-27** #11126 HIRE-4011 - Remove direct feature flags + misc
- **2025-06-30** #11139 [HIRE-4023] Fix e2e test
- **2025-07-02** #10934 [HIRE-3843] Refactor default primary planner
- **2025-07-03** #11162 HIRE-3868 - Instantly estimate modal
- **2025-07-07** #11174 [HIRE-4071] Remove disable-proposal-gating and gtm-live-date
- **2025-07-10** #11199 HIRE-4075 - Refactor Login/Register form
- **2025-07-11** #11226 HIRE-3970 - Experiment with Style image generation
- **2025-07-11** #11237 [HIRE-4134] Fix new address autocomplete e2e issues
- **2025-07-11** #11233 [HIRE-4127] Add more segment events for activation module
- **2025-07-14** #11245 [HIRE-4045] Fix style experiment image URLs
- **2025-07-14** #11248 HIRE-4045 - Design QA #2
- **2025-07-15** #11253 [HIRE-4139] Disable home A/B test
- **2025-07-15** #11256 [HIRE-4143] Remove dko-planner feature flag
- **2025-07-16** #11276 HIRE-4045 - Design QA #3
- **2025-07-21** #11311 HIRE-4186 - Update contractor profile image
- **2025-07-29** #11349 HIRE-4080 - Location landing page updates
- **2025-08-05** #11392 HIRE-4240 - Allow homeowners to register without last name
- **2025-08-05** #11390 [HIRE-4242] Remove "enable-payment-schedule-validation" feature flag
- **2025-08-06** #11412 HIRE-4234 - Update images for style experiment modal
- **2025-08-07** #11419 HIRE-4265 - Remove AI related feature flags
- **2025-08-11** #11427 HIRE-4252 - Add Contractor reviews scraping cronjob
- **2025-08-11** #11441 HIRE-4272 - Remove contractor messaging related feature flags
- **2025-08-15** #11478 HIRE-4277 - Backend updates to keep track of contractor onboarding status
- **2025-08-18** #11497 HIRE-4281 - Contractor licenses query and mutations
- **2025-08-19** #11503 HIRE-4286 - Contractor desktop onboarding page and logic
- **2025-08-19** #11510 [HIRE-4288][HIRE-4290] - Contractor Onboarding Get Started and Terms
- **2025-08-20** #11445 HIRE-1078 - Migrate to aws-sdk v3
- **2025-08-25** #11514 HIRE-4292 - Add basic Licenses functionality
- **2025-08-26** #11557 HIRE-4280 - Preferred zone pages
- **2025-08-26** #11548 HIRE-4379 - Remove old work order related flags
- **2025-08-27** #11568 HIRE-4393 - Update plan activation module
- **2025-08-27** #11576 HIRE-4394 - Fix issue with guides sitemap xml
- **2025-08-28** #11589 [HIRE-4410] Remove unused Stripe feature flags
- **2025-08-28** #11593 [HIRE-4331] Fix missing last name error
- **2025-08-28** #11584 HIRE-3752 - Improve Sentry/NextJS integration
- **2025-08-28** #11599 [HIRE-4419] Enable Mixpanel heatmaps
- **2025-08-28** #11600 [HIRE-4412] Remove projects dropdown
- **2025-09-03** #11632 [HIRE-1832] Mark message as read for all members after freezing channel
- **2025-09-08** #11687 HIRE-4477 - Fix errors on duplicateb Match Ready events
- **2025-09-10** #11712 HIRE-4452 - New contractor pipeline view setup
- **2025-09-10** #11689 [HIRE-4478] Remove flaky "Get Started" e2e test
- **2025-09-10** #11733 HIRE-4506 - Update main navigation for Renovation Studio
- **2025-09-11** #11741 HIRE-4449 - ProjectListItemV2 progress
- **2025-09-15** #11765 HIRE-4509 - Add latestStreamChatEventBooking to active jobs query
- **2025-09-15** #11767 [HIRE-4533] [HIRE-4509] Refactor Site Survey for unified status
- **2025-09-16** #11781 [HIRE-4451] Add updateEventBooking mutation
- **2025-09-18** #11789 HIRE-4451 - Update Status Modal
- **2025-09-22** #11845 HIRE-4599 - Contractor Dashboard Unified Status QA
- **2025-09-22** #11860 HIRE-4599 - QA #2
- **2025-09-22** #11863 [HIRE-4689] Update Notification list
- **2025-09-23** #11866 HIRE-4583 - Improve marketing/ad tracking
- **2025-09-23** #11883 [HIRE-4655] Callout component
- **2025-09-24** #11885 [HIRE-4707] Create BlockProtections component
- **2025-09-24** #11876 HIRE-4702 - Add UTM and marketing to OAuth registration
- **2025-09-24** #11892 HIRE-4681 - WhatHappensNext and GetExpertOpinion
- **2025-09-24** #11898 HIRE-4392 - FAQ section with exploring planning resources card
- **2025-09-26** #11911 HIRE-4599 - Contractor Unified Status  QA #3
- **2025-09-26** #11920 HIRE-4724 - Segment tracking
- **2025-09-29** #11877 [HIRE-4583] Improve Meta Ads Match Ready event quality
- **2025-09-30** #11948 HIRE-4746 - Add remaining callouts
- **2025-10-01** #11957 HIRE-4749 - Add calendly scheduled state for planner callout
- **2025-10-01** #11966 HIRE-4697 - Update ProjectCard for projects map
- **2025-10-02** #11972 [HIRE-4694] Organize ContractorCards and update avatar
- **2025-10-02** #11985 HIRE-4736 - Fix Accept Work Order modal calendar cutoff
- **2025-10-03** #11997 HIRE-4793 - Adjust review scraper
- **2025-10-03** #12000 HIRE-4797 - Fix ContentImage padding
- **2025-10-03** #11992 HIRE-4792 - Remove miscellaneous feature flags #1
- **2025-10-03** #12014 HIRE-4841 - Fix buildingApprovalFiles and designFiles errors
- **2025-10-06** #12022 HIRE-4727 - HO Unified Status QA
- **2025-10-06** #12030 HIRE-4841 - Fix files query issues
- **2025-10-07** #12044 HIRE-4841 - Fix Global nav query errors
- **2025-10-07** #12052 [HIRE-4883] Patch e2e tests for HO Unified Status
- **2025-10-09** #12048 HIRE-4876 - Remove miscellaneous feature flags #2
- **2025-10-09** #12079 HIRE-4567 - Contractor Unified Status post-launch clean up
- **2025-10-15** #12139 [HIRE-4895] Sync expected net revenue to Salesforce
- **2025-10-16** #12156 HIRE-4236: Implement first-party domain for Segment
- **2025-10-16** #12154 HIRE-4975 - Turn off work order alert email subscription for
- **2025-10-16** #12158 [HIRE-4975] Update
- **2025-10-22** #12192 HIRE-5054  - Add the fee breakdown modal
- **2025-10-23** #12212 HIRE-5100 - Fix broken dependency for FileService
- **2025-10-23** #12215 HIRE-5082 - Take Rate Transparency QA
- **2025-10-24** #12236 HIRE-5036 - Update Breadcrumbs
- **2025-10-27** #12240 HIRE-5124 - Add Salesforce CRM field to team member form
- **2025-10-27** #12249 HIRE-5136 - Add Trade Program link
- **2025-10-28** #12266 HIRE-5047 - Add contact us link to help center
- **2025-10-29** #12278 HIRE-5151 - Fix Salesforce handler issues
- **2025-10-30** #12294 [HIRE-5183] Update salesforce-worker output
- **2025-10-30** #12296 HIRE-5169 - Add async job to run email and phone validation
- **2025-10-30** #12301 Hotfix - Add missing dependency for ValidateUserInputs - DEV
- **2025-10-30** #12302 Hotfix - Add missing dependency for ValidateUserInputs - MASTER
- **2025-10-31** #12303 HIRE-5047 - Update "Contact Us" in Contractor Dashboard
- **2025-11-03** #12307 HIRE-5171 - Add backend mutations for phone/email verification
- **2025-11-05** #12335 [HIRE-5171] Backend adjustments for phone verification
- **2025-11-05** #12337 HIRE-5172 - Add new phone verification logic
- **2025-11-05** #12345 [HIRE-5171] Fix missing graphQL enum value
- **2025-11-06** #12367 [HIRE-5175] Verification QA
- **2025-11-07** #12394 [HIRE-3730] Add additional data to USER_LEAD_CREATED activity log
- **2025-11-12** #12402 [HIRE-5222] Add FAQ schema JSON+LD
- **2025-11-13** #12385 HIRE-5191 - Implement CustomerIO backend services
- **2025-11-14** #12412 [HIRE-5183] 
- **2025-11-14** #12432 Add help text to proposal editor
- **2025-11-14** #12401 HIRE-5297 - Navigation updates 2025-11-10
- **2025-11-14** #12435 [HIRE-4962] Fix button Contractor Notification button
- **2025-11-14** #12437 [HIRE-5289] Fix contractor image in ContractorCardV3
- **2025-11-17** #12430 HIRE-5338 - Add retry logic to SyncUserAccount
- **2025-11-17** #12428 HIRE-5351 - Improve Salesforce log message
- **2025-11-18** #12456 [HIRE-5270] Send Sales Slack notification on legacy conversion
- **2025-11-18** #12467 HIRE-5211 - Add indicators in Project sidebar for phone/email verification and validation
- **2025-11-19** #12473 [HIRE-5397] Add NANP phone validation before verification initialization
- **2025-11-20** #12490 [HIRE-5424] Fix type issue in ValidateUserInputs
- **2025-11-20** #12489 HIRE-5219 - Add phone validation to HO settings
- **2025-11-20** #12499 [HIRE-5429] Fix city field on Opportunity
- **2025-11-21** #12503 HIRE-5425: Handle SSO user
- **2025-11-21** #12508 [HIRE-5447] Add location link to footer
- **2025-11-24** #12509 [HIRE-5449] Update TwilioGateway logging
- **2025-11-25** #12519 Add block way link to navigation
- **2025-11-25** #12520 [HIRE-4843] Add new placeholders for the projects
- **2025-11-25** #12521 Refactor help components and add calendly link
- **2025-11-25** #12530 [HIRE-4843] Fix image change on rerender
- **2025-11-25** #12524 HIRE-5400 - Update for new FAQ page
- **2025-11-26** #12540 HIRE-5458 - Update locations dropdowns
- **2025-11-26** #12550 [HIRE-5458] Fix Miami nav item
- **2025-12-01** #12553 HIRE-5427 - Customer.io email migration
- **2025-12-15** #12691 [HIRE-5740] Add link to "Ask ChatGPT About Block"
- **2025-12-15** #12692 [HIRE-5742] Disable ChicagoLaunchModal
- **2025-12-16** #12705 [HIRE-5703] Add mutations to create start new renovation plan
- **2025-12-18** #12740 [HIRE-5764] Updates locations links
- **2025-12-18** #12734 HIRE-5748 - Customer.IO updates for new lead workflow
- **2025-12-18** #12745 HIRE-5767 - Save phone numbers as E.164 format
- **2025-12-18** #12748 [HIRE-5772] Add missing StreamChatEventBookingModule dependency in CronJobContainer
- **2025-12-19** #12756 [HIRE-5774] Update footer disclaimer for HTML
- **2025-12-22** #12764 HIRE-5782 - Add Jan 2026 promo modal  to marketing website
- **2025-12-23** #12761 [HIRE-5465] Remove catalog pages
- **2025-12-24** #12768 [HIRE-5785] Remove unused contexts
- **2025-12-26** #12767 [HIRE-5784] Remove design library
- **2025-12-30** #12786 [HIRE-5803] Update HO banner logic
- **2025-12-30** #12785 [HIRE-5803] Update HO banner logic
- **2026-01-05** #12777 [HIRE-5806] Remove project-revision-calculations and refactor
- **2026-01-05** #12778 [HIRE-5809] Remove proposal-change-events
- **2026-01-05** #12793 HIRE-5841 - Misc updates 2026 01 05
- **2026-01-05** #12795 [HIRE-5842] Update organizationProfilesPublic with limit/offset
- **2026-01-06** #12796 [HIRE-5842] Add contractor profiles to sitemap
- **2026-01-06** #12780 [HIRE-5811] Remove recover-user-session feature flag and Session related entities
- **2026-01-06** #12779 [HIRE-5810] Remove puppeteer-pdfs FF and Puppeteer dependencies
- **2026-01-07** #12811 HIRE-5862 - Remove proposals comparison component
- **2026-01-07** #12809 [HIRE-5866] Remove old Twilio usage alerts endpoint
- **2026-01-07** #12798 [HIRE-5848] Update to pnpm v10.27.0
- **2026-01-07** #12817 [HIRE-5848] Fix broken pnpm install
- **2026-01-07** #12819 [HIRE-5848] Add dangerouslyAllowAllBuilds: true
- **2026-01-08** #12821 HIRE-5848 - Update pnpm config
- **2026-01-08** #12827 [HIRE-5885] Add playwright to allowBuilds
- **2026-01-08** #12826 [HIRE-5879] Update graphql dependency
- **2026-01-08** #12781 [HIRE-5814] Remove revisions related feature flags
- **2026-01-08** #12782 [HIRE-5815] Remove sales-proposal-auto-generation
- **2026-01-09** #12830 [HIRE-5879] Update graphql for artillery and bridge/frontend
- **2026-01-09** #12789 HIRE-5821 - Update nodemon
- **2026-01-09** #12833 [HIRE-5895] Hide announcement banner
- **2026-01-12** #12783 [HIRE-5816] Remove show-work-order-acceptance-cap feature flag
- **2026-01-12** #12787 [HIRE-5818] Remove sku_vendor_history_migration feature flag
- **2026-01-12** #12788 [HIRE-5819] Removes tiered-markups
- **2026-01-13** #12837 [HIRE-5897] Add user tags
- **2026-01-14** #12855 [HIRE-5897] Add use flag to Launch Darkly identify
- **2026-01-15** #12865 HIRE-5934 - Align Tailwind, formik and other related dependencies
- **2026-01-15** #12872 [HIRE-5933] Add new links and indent property
- **2026-01-15** #12883 [HIRE-5983] Adjust padding for ContentImage module
- **2026-01-15** #12877 Proposal duplication apostrophe
- **2026-01-16** #12880 HIRE-5976 - Investigate increased Twilio cost
- **2026-01-20** #12774 [HIRE-5528] Update Node v20 -> v24
- **2026-01-21** #12924 [HIRE-6067] Remove sqlite3 dependency in favor of better-sqlite3
- **2026-01-21** #12932 [HIRE-5528] Update apt-get dependencies for circleci
- **2026-01-21** #12935 [HIRE-5528] Reverting libasound2t64 change
- **2026-01-22** #12938 [HIRE-6072] Update dd-trace to potentially fix BullBoard
- **2026-01-22** #12939 [HIRE-6077] Update marketplace_frontend_testing config
- **2026-01-26** #12967 Email support prefix removal
- **2026-01-29** #12988 [HIRE-6117] Update proposal workflow availability
- **2026-01-29** #12989 [HIRE-6122] Align marketplace-web @typescript-eslint with the rest of…
- **2026-01-30** #12969 HIRE-6085 - Set up agentic chat across HO dashboard
- **2026-01-30** #12990 [HIRE-6125] Align @types/cors
- **2026-02-03** #13004 Small businesses nav item
- **2026-02-04** #12995 Lodash dependency alignment
- **2026-02-09** #13060 [HIRE-6202] Change Kitchen Cabinet Visualizer link in top nav
- **2026-02-19** #13121 [HIRE-6270] Fix double loading spinner on Reset My Password button
- **2026-02-20** #13014 @aws-sdk dependencies alignment
- **2026-02-23** #13134 [HIRE-6272] Add throttling to phone verification in Quiz
- **2026-02-23** #13032 [HIRE-6150] Align @segment/analytics-node dependency
- **2026-02-24** #13155 HIRE-6161 - Align winston dependency
- **2026-02-25** #13156 HIRE-6135 - Align axios dependency
- **2026-02-27** #13184 [HIRE-6317] Align sharp dependency
- **2026-03-02** #13192 [HIRE-6323] Fix choiceQuizInitialization e2e failures due to Voice A/B test
- **2026-03-02** #13182 [HIRE-6145] Align react-textarea-autosize dependency
- **2026-03-06** #13234 HIRE-6335 - Foundations for Agentic widgets
- **2026-03-09** #13239 [HIRE-6368] Update updateProjectStatusEventHandler Salesforce handler
- **2026-03-09** #13203 [HIRE-6325] Align zod dependency
- **2026-03-11** #13280 HIRE-6337 - Project summary widget
- **2026-03-12** #13282 [HIRE-6162] Align yet-another-react-lightbox dependency
- **2026-03-13** #13285 [HIRE-6151] Align mixpanel-browser dependencies
- **2026-03-16** #13289 HIRE-6345 - Document upload widget
- **2026-03-16** #13292 [HIRE-6154] Align pg dependency
- **2026-03-18** #13318 HIRE-6338 - Contractor widgets
- **2026-03-25** #13379 [HIRE-6482] Remove shade-blend-color
- **2026-03-25** #13378 [HIRE-6480] Replaces hex-to-rgba with addOpacityToHexColor
- **2026-03-25** #13368 [HIRE-6153] Align openai dependency
- **2026-03-25** #13382 [HIRE-6471] Add Custom Home Building Guide link to Resources nav
- **2026-03-27** #13395 HIRE-6342 - Proposal comparison widgets
- **2026-03-31** #13411 HIRE-6518 - Refactor Follow/Wake Up flow
- **2026-04-01** #13416 HIRE-6523 - Proposal acceptance transition
- **2026-04-01** #13445 [HIRE-6495] Adjustments from Bug Bash
- **2026-04-02** #13455 [HIRE-6580] Add createdAt to LaunchDarkly identify
- **2026-04-02** #13458 [HIRE-6580] Add createdAt to ldClient.identify
- **2026-04-07** #13474 HIRE-6156 - Align prettier dependencies
- **2026-04-07** #13471 [HIRE-6590] Remove /agents; Move ChatAgentProvider;
- **2026-04-07** #13485 HIRE-6579 - Refactor useScrollToBottom to fix widget scroll bug
- **2026-04-07** #13507 HIRE-6592 - Update documents query
- **2026-04-08** #13503 HIRE-6609 - Remove Front chat integration
- **2026-04-08** #13517 [HIRE-6592] Use GraphQL query to show project summary attachments
- **2026-04-08** #13521 HIRE-6500 - Update contractor card widget
- **2026-04-09** #13509 HIRE-6612 - Migrate faker v4 to @faker-js/faker 8.4.1
- **2026-04-10** #13543 [HIRE-6633] Fix some flaky tests
- **2026-04-10** #13552 [HIRE-6617] Fix isWakeUpPending on impersonated users
- **2026-04-10** #13551 HRIE-6635 - Update take rate transparency to handle 1m+
- **2026-04-14** #13568 [HIRE-6686] Replace orange100 with orange400
- **2026-04-15** #13573 HIRE-6675 - Create opportunity for new projects
- **2026-04-16** #13584 HIRE-6694 - Migrate modalCompound to @block/ui
- **2026-04-16** #13585 [HIRE-6696] Back end updates
- **2026-04-17** #13586 HIRE-6697 - Multiple projects modal
- **2026-04-17** #13587 HIRE-6699 - Create new project
- **2026-04-17** #13599 HIRE-6719 - Design System refactor and agent information
- **2026-04-22** #13632 [HIRE-6754] Refactor Block logo
- **2026-04-22** #13615 [HIRE-6626] Add individual Slack DM notifications for sales planners
- **2026-04-22** #13637 Chore - Remove SendSkuVendorSlackDataInteractor
- **2026-04-23** #13630 HIRE-6746 - Move Button to Design System and refactor
- **2026-04-23** #13652 [HIRE-6746] Fix broken build due to Button reloactions
- **2026-04-23** #13618 [HIRE-6745] Replace deprecated color tokens
- **2026-04-23** #13655 HIRE-6777 - Icons for Design System
- **2026-04-24** #13659 [HIRE-6792] Remove UpdateCrmAnswersForPricingEngineUseCase

### block-hubspot (56 PRs)

- **2022-06-02** #43 Feature/BLOCK-4419 - Eventbrite module
- **2022-08-11** #45 Block 4457 - Hubspot DX Improvement
- **2022-08-15** #46 Bugfix/BLOCK-4457 - QA fixes
- **2022-08-19** #47 BLOCK-4457 - Refactor and improve developer experience
- **2022-09-09** #48 BLOCK-4551 - Hubspot blog templates
- **2022-09-26** #49 BLOCK-4557 - Hubspot blog QA updates
- **2022-09-28** #50 Sandbox
- **2024-03-27** #79 GROW-1230 - SEO onsite updates
- **2024-03-28** #80 Deploy 2024-03-27 - SEO onsite updates
- **2025-01-14** #98 Update Hubspot deploy process
- **2025-01-14** #100 Set up production deploy
- **2025-01-14** #101 Update deploy-production.yml
- **2025-01-14** #103 Test Deploys
- **2025-01-14** #104 Test production deploy
- **2025-01-14** #105 Test production deploy (#104)
- **2025-01-14** #106 Update production deploy config
- **2025-01-14** #107 Production Deploy Updates
- **2025-01-14** #109 Adjust production deploy
- **2025-01-14** #110 Update production deploy
- **2025-01-14** #111 Update
- **2025-01-14** #112 Update production deploy
- **2025-01-14** #113 Update deploy-production.yml
- **2025-01-14** #114 Update deploy-production.yml
- **2025-01-14** #115 Update deploy-production.yml
- **2025-01-14** #116 Sandbox
- **2025-01-14** #117 Sandbox
- **2025-01-14** #120 Clean up deploy process
- **2025-01-14** #121 Clean up deploy process
- **2025-01-23** #123 Update main CTA logic to show go to dashboard
- **2025-02-18** #135 Update the Plan CTA URL
- **2025-03-10** #141 HIRE-3084 - Integrate newsletter forms with Customer.io
- **2025-03-17** #143 HIRE-3113 - Create global CTAs
- **2025-04-16** #147 HIRE-3114 - Add the new tag to plan links
- **2025-05-05** #149 HIRE-3502 - Update guides navigation
- **2025-06-06** #151 HIRE-3879 - Update pages with noindex
- **2025-06-16** #153 Adjust adournments
- **2025-06-16** #155 Update location adournment CSS attribute selector
- **2025-06-17** #157 HIRE-3984: Global Blog CTA (Renovation Consultant)
- **2025-08-29** #159 HIRE-4414 - Add author byline and bio
- **2025-08-29** #160 HIRE-4417 - Inline quote module
- **2025-09-02** #161 HIRE-4415  - Add Header V2 for blog posts
- **2025-09-09** #162 HIRE-4479 - QA updates
- **2025-09-10** #164 HIRE-4506 - Add new to Renovation Studio
- **2025-09-10** #166 HIRE-4506 - Update navigation for "Renovation Studio" on mobile
- **2025-10-08** #170 HIRE-4418 - Add "About Block" global inline CTA
- **2025-10-10** #172 HIRE-4898 - Add written and edited by fields
- **2025-10-13** #171 HIRE-4416 - Add Contractor Inline CTA
- **2025-10-27** #178 HIRE-5111 - Add "Commercial" global CTA
- **2025-12-01** #180 HIRE-5448 - Update locations dropdown
- **2025-12-26** #184 [HIRE-5776] Add promo pop-up to Guides
- **2026-02-02** #186 HIRE-6129 - Update main navigation
- **2026-02-02** #187 Update node version for GA
- **2026-02-02** #188 Set up Github CLI since self-hosted runner doesn't have it
- **2026-02-02** #189 Update action used to setup Github CLI
- **2026-02-25** #194 Adjustments
- **2026-03-25** #200 [HIRE-6486] Update Resources dropdown CSS to place first 3 items in column 1

### block-web (56 PRs)

- **2022-08-19** #3009 BLOCK-4596 - Refactor VideoPlayer to use <source>
- **2022-08-23** #3011 BLOCK-4596 - Refactor ProductHeroVideo video element
- **2022-08-30** #3031 BLOCK-4596 - Use WebM video URLs in MarketPlaceHero and ProductHeroMarketplace
- **2022-09-08** #3051 BLOCK-4614 - Update web SEO meta descriptions
- **2022-09-09** #3059 BLOCK-4688 - Fix dl/dd/dt accessibility issues from SEO audit
- **2022-09-09** #3060 BLOCK-4614 - Update web SEO meta descriptions - Round #2
- **2022-09-09** #3061 BLOCK-4671 - Refactor RoomTabs in DesignLibrary to resolve button issue
- **2022-09-12** #3065 BLOCK-4692 - Update viewport meta tag to resolve min/max scale issue
- **2022-09-15** #3067 BLOCK-4746 - Update marketing website SEO titles
- **2022-09-19** #3070 BLOCK-4742 - Fix H1 SEO issues
- **2022-12-05** #3264 BLOCK-4854 - Bugfix and QA for add room form elements
- **2022-12-29** #3344 BLOCK-4972 - Marketing Site - Navigation
- **2023-01-04** #3350 BLOCK-4973 - Marketing Site - Footer
- **2023-04-18** #4131 GROW-398 -  Update Dual CTA copy
- **2023-11-27** #5503 GROW-1509 - Fix unaligned buttons in contractor cards
- **2023-12-28** #5635 GROW-1598 - Remove Blueprint routes and code
- **2023-12-28** #5638 GROW-1604 - Refactor marketing site
- **2024-01-02** #5641 GROW-1631 - Add canonical tags
- **2024-01-03** #5644 GROW-1640 - Add CLOSED_LOST dashboard stage
- **2024-01-16** #5673 Feature/grow 1680 - Remove materials mentions
- **2024-01-18** #5699 GROW-1630 - Move LegalDisclaimer to lead creation step
- **2024-02-01** #5752 GROW-1780 - Remove EventScheduledContent from Calendly components
- **2024-02-02** #5762 GROW-1825 - Add limit to images in Contractor Card carousel
- **2024-02-02** #5763 GROW-1825 - Add limit to images in Contractor Card carousel
- **2024-02-05** #5753 GROW-1784 - Update contractor module on spaces page
- **2024-02-05** #5755 GROW-1802 - Fix dashboard menu issues
- **2024-02-05** #5758 GROW-1816 - Refactor and fix reviews CSS
- **2024-02-05** #5761 GROW-1811 - Update shouldHideSubmit implementation
- **2024-02-08** #5779 GROW-1751 - Choice e2e - Home to Dashboard
- **2024-02-12** #5790 GROW-1751 Wait for modal to show
- **2024-02-12** #5794 GROW-1752 - Add test for Sales proposal -> site visit availability set
- **2024-02-15** #5816 GROW-1855 - Fix FAQs link on HIW page
- **2024-02-16** #5827 GROW-1861 - Disabled Site Visit Availibility submit button
- **2024-02-21** #5844 GROW-1858 - Improve project profiles loading experience
- **2024-02-28** #5892 GROW-1673 - Choice UX Updates
- **2024-02-29** #5910 DPS-908 - Add new footer (v3) to Dashboardv3
- **2024-02-29** #5903 GROW-1685 - Remove legacy e2e tests
- **2024-02-29** #5845 GROW-1683 - Marketing site updates
- **2024-03-04** #5936 GROW-2007 - Fix image URLs
- **2024-03-05** #5938 GROW-1972 - Update captitalization
- **2024-03-05** #5941 GROW-2010 - Roll out HomeV2
- **2024-03-08** #5959 GROW-2023 - Remove old lead capture pages and related components
- **2024-03-12** #5954 GROW-2009 - Update main CTA copy and refactor implementation
- **2024-03-14** #6004 GROW-2031 - Update top contractors component
- **2024-03-15** #6010 GROW-1833 - Fix issue causing wrong no-index DEV
- **2024-03-15** #6009 GROW-1833 - Fix issue causing wrong no-index MASTER
- **2024-03-15** #6011 GROW-2032 - Remove unused SessionProvider
- **2024-03-20** #6033 GROW-2042 - Copy updates
- **2024-03-25** #6035 GROW-2042 - Clean up middleware
- **2024-03-25** #6057 DPS-1012 - Fix broken images in Customer Gallery - DEV
- **2024-03-25** #6058 DPS-1012 - Fix broken images in Customer Gallery - MASTER
- **2024-03-27** #6018 CVR-1230 - On-site SEO updates
- **2024-03-27** #6066 GROW-1230 - Update robots.txt implementation
- **2024-04-10** #6116 GROW-2087 - AriChat TOF updates
- **2024-05-08** #6231 HIRE-122 - Implement RenovateConfidentlyCTA
- **2024-05-09** #6233 HIRE-5 - Design QA

### block-native (20 PRs)

- **2024-01-09** #1635 GROW-1273 - Main Contractor Preference page
- **2024-02-22** #1699 GROW-1851 - Update Work Order acceptance flow for missing homeowner availability
- **2024-03-07** #1722 GROW-2021 - Contractor preferences copy
- **2024-03-07** #1727 Bump Builder app version to 1.14.12
- **2025-03-25** #2024 HIRE-3130 - Update change orders view
- **2025-03-25** #2029 HRE-3135 - Update change order details
- **2025-03-26** #2030 HIRE-3259 - Update delete and reminder modals
- **2025-03-26** #2033 HIRE-3263 - Add feature-contractor-desktop-change-orders FF
- **2025-03-27** #2037 HIRE-3132 - Update add change order flow
- **2025-03-31** #2038 HIRE 3133 - Display change order content as Markdown
- **2025-04-01** #2041 HIRE-3134 - Add photo upload to change order
- **2025-04-03** #2043 HIRE-3334 - QA bug bash
- **2025-04-04** #2048 HIRE-3334 - QA bug bash
- **2025-04-07** #2051 HIRE-3334 - Adds react-native-keyboard-accessory to Change Order forms
- **2025-09-26** #2127 HIRE-4599 - Contractor Unified Status QA #3
- **2025-09-26** #2129 HIRE-4724 - Segment tracking for Unified Status
- **2025-09-29** #2130 HIRE-4744 - Fix app store issue
- **2025-10-10** #2133 HIRE-4884 - Add the application ID to LD initialization
- **2026-01-07** #2175 [HIRE-5848] Update to pnpm v10.27.0
- **2026-01-08** #2176 HIRE-5848 - Update pnpm config

### block-admin (19 PRs)

- **2024-03-08** #3734 GROW-2025 - Add REMOVE/LOST WO status
- **2025-02-28** #3917 HIRE-2713 - Add Export PDF for published proposals
- **2025-03-27** #3922 HIRE-3287 - Add login with contractor button to Org page
- **2025-04-08** #3921 Refactor paymentScheduleTerm pages
- **2025-04-10** #3927 HIRE-2922 - Remove Hubspot functionality from Admin
- **2025-04-23** #3933 HIRE-3525 - Migrate block-admin to PNPM
- **2025-04-23** #3936 HIRE-3354 - Payment/Payout schedule updates
- **2025-04-30** #3940 HIRE-3549 - UI for activity log in admin
- **2025-04-30** #3942 HIRE-3561 - Update Project Gallery page with SEO title and description fields
- **2025-05-02** #3944 HIRE-3561 - Add slug field to customer gallery
- **2025-06-09** #3952 HIRE-3901 - Add Admin UI for reviews scraping
- **2025-10-14** #3961 HIRE-4236 - Implement first-party domain for Segment
- **2025-10-27** #3965 Add Salesforce CRM ID to Team Member form
- **2025-11-10** #3967 HIRE3730 - Display data column information in Activity Log entries
- **2025-11-19** #3970 HIRE-5211 - Add indicators in Project sidebar for phone/email verification and validation
- **2026-01-07** #3978 [HIRE-5848] Update to pnpm v10.27.0
- **2026-01-08** #3980 HIRE-5848 - Update pnpm config
- **2026-01-20** #3975 [HIRE-5528] Update to Node24
- **2026-04-15** #3990 HIRE-6670 - Add "Start New Project" button to admin

### block-iac (12 PRs)

- **2024-01-18** #49 Add update-project-status handler
- **2024-12-11** #79 Adjust arguments for sync-user-account
- **2025-02-21** #80 Remove commitUser filtering
- **2025-10-29** #83 Updates to reduce failed syncs
- **2025-10-30** #84 HIRE-5180 - Update lead planner update
- **2025-11-11** #85 Update sync-user-account
- **2025-11-11** #86 HIRE-5311 - Update updateProjectPlanner handler
- **2025-11-18** #87 Update template and address handler rules
- **2025-11-24** #88 Add filter for Pre-leads
- **2026-03-27** #91 2026-03-26 - Update Salesforce rules with new Planner IDs
- **2026-04-08** #92 Add Katie Salmon to the list of planners
- **2026-04-10** #93 Update planners

### docker-block-api-ci-builder (3 PRs)

- **2026-01-16** #4 Update for Node v24
- **2026-01-16** #5 Update to trigger Github Actions
- **2026-01-16** #6 Fix .github folder

### docker-block-web-ci-builder (3 PRs)

- **2026-01-16** #3 Prepare for Node v24 update
- **2026-01-16** #4 Update dependencies for Node24
- **2026-01-16** #5 Update

### block-cli (2 PRs)

- **2024-02-14** #22 Remove github actions
- **2024-02-27** #23 Add db-creds command

### docker-block-api (1 PRs)

- **2026-01-16** #11 Update for Node v24

### docker-block-admin-ci-builder (1 PRs)

- **2026-01-16** #1 Update to Node 24.13.0
