# open_api

OpenApi - JavaScript client for open_api
OpenAPI
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install open_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OpenApi = require('open_api');

var api = new OpenApi.AuthAPIApi()
var body = new OpenApi.AuthLogin(); // {AuthLogin} Request body for controller.AuthLogin

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.authLogin(body, callback);
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OpenApi.AuthAPIApi* | [**authLogin**](docs/AuthAPIApi.md#authLogin) | **POST** /api/auth/-/login | login
*OpenApi.AuthAPIApi* | [**authLogout**](docs/AuthAPIApi.md#authLogout) | **POST** /api/auth/-/logout | logout
*OpenApi.AuthAPIApi* | [**authRegister**](docs/AuthAPIApi.md#authRegister) | **POST** /api/auth/-/register | register
*OpenApi.AuthAPIApi* | [**authWhoAmI**](docs/AuthAPIApi.md#authWhoAmI) | **GET** /api/auth/whoami | whoAmI
*OpenApi.AuthLoginResponseApi* | [**authLogin**](docs/AuthLoginResponseApi.md#authLogin) | **POST** /api/auth/-/login | login
*OpenApi.AuthLoginResponseApi* | [**authRegister**](docs/AuthLoginResponseApi.md#authRegister) | **POST** /api/auth/-/register | register
*OpenApi.AuthWhoAmIResponseApi* | [**authWhoAmI**](docs/AuthWhoAmIResponseApi.md#authWhoAmI) | **GET** /api/auth/whoami | whoAmI
*OpenApi.GPTAPIApi* | [**gPTRequest**](docs/GPTAPIApi.md#gPTRequest) | **POST** /api/gpt/ | postGpt
*OpenApi.GptApi* | [**gPTRequest**](docs/GptApi.md#gPTRequest) | **POST** /api/gpt/ | postGpt
*OpenApi.KbApi* | [**createKB**](docs/KbApi.md#createKB) | **POST** /api/kb/ | postKb
*OpenApi.KbApi* | [**getKB**](docs/KbApi.md#getKB) | **GET** /api/kb/{id} | getKb
*OpenApi.KbApi* | [**updateKB**](docs/KbApi.md#updateKB) | **PUT** /api/kb/{id} | putKb
*OpenApi.KnowledgeBaseAPIApi* | [**createKB**](docs/KnowledgeBaseAPIApi.md#createKB) | **POST** /api/kb/ | postKb
*OpenApi.KnowledgeBaseAPIApi* | [**createKBQuestion**](docs/KnowledgeBaseAPIApi.md#createKBQuestion) | **POST** /api/kb/{id}/questions | postKbQuestion
*OpenApi.KnowledgeBaseAPIApi* | [**createVersionKBQuestion**](docs/KnowledgeBaseAPIApi.md#createVersionKBQuestion) | **POST** /api/kb/{id}/questions/{qid} | putKbQuestion
*OpenApi.KnowledgeBaseAPIApi* | [**dELETEApikbidquestionsqidtagstagidDeleteKbQuestionTag**](docs/KnowledgeBaseAPIApi.md#dELETEApikbidquestionsqidtagstagidDeleteKbQuestionTag) | **DELETE** /api/kb/{id}/questions/{qid}/tags/{tagid} | deleteKbQuestionTag
*OpenApi.KnowledgeBaseAPIApi* | [**deleteKB**](docs/KnowledgeBaseAPIApi.md#deleteKB) | **DELETE** /api/kb/{id} | deleteKb
*OpenApi.KnowledgeBaseAPIApi* | [**deleteKBQuestion**](docs/KnowledgeBaseAPIApi.md#deleteKBQuestion) | **DELETE** /api/kb/{id}/questions/{questionid} | deleteKbQuestion
*OpenApi.KnowledgeBaseAPIApi* | [**gETApikbidquestionsqidshareGetAllKbQuestionMagicLinks**](docs/KnowledgeBaseAPIApi.md#gETApikbidquestionsqidshareGetAllKbQuestionMagicLinks) | **GET** /api/kb/{id}/questions/{qid}/share | getAllKbQuestionMagicLinks
*OpenApi.KnowledgeBaseAPIApi* | [**gETApikbidquestionsqidversionsGetKbQuestionVersions**](docs/KnowledgeBaseAPIApi.md#gETApikbidquestionsqidversionsGetKbQuestionVersions) | **GET** /api/kb/{id}/questions/{qid}/versions | getKbQuestionVersions
*OpenApi.KnowledgeBaseAPIApi* | [**gETApikbidquestionsqidversionslatestGetKbQuestionLatest**](docs/KnowledgeBaseAPIApi.md#gETApikbidquestionsqidversionslatestGetKbQuestionLatest) | **GET** /api/kb/{id}/questions/{qid}/versions/latest | getKbQuestionLatest
*OpenApi.KnowledgeBaseAPIApi* | [**getAllKBQuestion**](docs/KnowledgeBaseAPIApi.md#getAllKBQuestion) | **GET** /api/kb/{id}/questions | getAllQuestions
*OpenApi.KnowledgeBaseAPIApi* | [**getKB**](docs/KnowledgeBaseAPIApi.md#getKB) | **GET** /api/kb/{id} | getKb
*OpenApi.KnowledgeBaseAPIApi* | [**pOSTApikbidquestionsqidversionsPostKbQuestionVersion**](docs/KnowledgeBaseAPIApi.md#pOSTApikbidquestionsqidversionsPostKbQuestionVersion) | **POST** /api/kb/{id}/questions/{qid}/versions | postKbQuestionVersion
*OpenApi.KnowledgeBaseAPIApi* | [**pUTApikbidquestionsqidtagstagidAssignKbQuestionTag**](docs/KnowledgeBaseAPIApi.md#pUTApikbidquestionsqidtagstagidAssignKbQuestionTag) | **PUT** /api/kb/{id}/questions/{qid}/tags/{tagid} | assignKbQuestionTag
*OpenApi.KnowledgeBaseAPIApi* | [**updateKB**](docs/KnowledgeBaseAPIApi.md#updateKB) | **PUT** /api/kb/{id} | putKb
*OpenApi.OrgApi* | [**getOrg**](docs/OrgApi.md#getOrg) | **GET** /api/org/{id} | getOrg
*OpenApi.OrgApi* | [**updateOrg**](docs/OrgApi.md#updateOrg) | **PUT** /api/org/{id} | putOrg
*OpenApi.OrgAPIApi* | [**assignOrgUser**](docs/OrgAPIApi.md#assignOrgUser) | **PUT** /api/org/{id}/users/{userid}/teams/{teamid} | putOrgUser
*OpenApi.OrgAPIApi* | [**createOrgQuestionnaire**](docs/OrgAPIApi.md#createOrgQuestionnaire) | **POST** /api/org/{id}/questionnaire | postOrgQuestionnaire
*OpenApi.OrgAPIApi* | [**createOrgUser**](docs/OrgAPIApi.md#createOrgUser) | **POST** /api/org/{id}/users | postOrgUser
*OpenApi.OrgAPIApi* | [**deleteOrgUser**](docs/OrgAPIApi.md#deleteOrgUser) | **DELETE** /api/org/{id}/users/{userid} | deleteOrgUser
*OpenApi.OrgAPIApi* | [**getOrg**](docs/OrgAPIApi.md#getOrg) | **GET** /api/org/{id} | getOrg
*OpenApi.OrgAPIApi* | [**getOrgPlan**](docs/OrgAPIApi.md#getOrgPlan) | **GET** /api/org/{id}/plan | getOrgPlan
*OpenApi.OrgAPIApi* | [**getOrgQuestionnaire**](docs/OrgAPIApi.md#getOrgQuestionnaire) | **GET** /api/org/{id}/questionnaire | getOrgQuestionnaire
*OpenApi.OrgAPIApi* | [**getOrgTags**](docs/OrgAPIApi.md#getOrgTags) | **GET** /api/org/{id}/teams/tags | getAllOrgTeamTags
*OpenApi.OrgAPIApi* | [**getOrgTeams**](docs/OrgAPIApi.md#getOrgTeams) | **GET** /api/org/{id}/teams | getAllOrgTeam
*OpenApi.OrgAPIApi* | [**getOrgUser**](docs/OrgAPIApi.md#getOrgUser) | **GET** /api/org/{id}/users/{userid} | getOrgUser
*OpenApi.OrgAPIApi* | [**getOrgUsers**](docs/OrgAPIApi.md#getOrgUsers) | **GET** /api/org/{id}/users | getAllOrgUser
*OpenApi.OrgAPIApi* | [**updateOrg**](docs/OrgAPIApi.md#updateOrg) | **PUT** /api/org/{id} | putOrg
*OpenApi.OrgAPIApi* | [**updateOrgQuestionnaire**](docs/OrgAPIApi.md#updateOrgQuestionnaire) | **PUT** /api/org/{id}/questionnaire | putOrgQuestionnaire
*OpenApi.OrgPlanApi* | [**getOrgPlan**](docs/OrgPlanApi.md#getOrgPlan) | **GET** /api/org/{id}/plan | getOrgPlan
*OpenApi.OrgQuestionnaireApi* | [**createOrgQuestionnaire**](docs/OrgQuestionnaireApi.md#createOrgQuestionnaire) | **POST** /api/org/{id}/questionnaire | postOrgQuestionnaire
*OpenApi.OrgQuestionnaireApi* | [**getOrgQuestionnaire**](docs/OrgQuestionnaireApi.md#getOrgQuestionnaire) | **GET** /api/org/{id}/questionnaire | getOrgQuestionnaire
*OpenApi.OrgTagApi* | [**getOrgTags**](docs/OrgTagApi.md#getOrgTags) | **GET** /api/org/{id}/teams/tags | getAllOrgTeamTags
*OpenApi.OrgTeamApi* | [**getOrgTeams**](docs/OrgTeamApi.md#getOrgTeams) | **GET** /api/org/{id}/teams | getAllOrgTeam
*OpenApi.OrgUserApi* | [**createOrgUser**](docs/OrgUserApi.md#createOrgUser) | **POST** /api/org/{id}/users | postOrgUser
*OpenApi.OrgUserApi* | [**getOrgUser**](docs/OrgUserApi.md#getOrgUser) | **GET** /api/org/{id}/users/{userid} | getOrgUser
*OpenApi.OrgUserApi* | [**getOrgUsers**](docs/OrgUserApi.md#getOrgUsers) | **GET** /api/org/{id}/users | getAllOrgUser
*OpenApi.RoomApi* | [**deleteUserMessage**](docs/RoomApi.md#deleteUserMessage) | **DELETE** /api/user/{id}/messages/{messageid} | getAllUserRooms
*OpenApi.RoomApi* | [**listUserRooms**](docs/RoomApi.md#listUserRooms) | **GET** /api/user/{id}/rooms | getAllUserRooms
*OpenApi.RoomApi* | [**messageUser**](docs/RoomApi.md#messageUser) | **POST** /api/user/{id}/messages | getAllUserRooms
*OpenApi.RootApi* | [**gET1**](docs/RootApi.md#gET1) | **GET** / | 1
*OpenApi.TagApi* | [**createTag**](docs/TagApi.md#createTag) | **POST** /api/tag/ | postTag
*OpenApi.TagApi* | [**getTag**](docs/TagApi.md#getTag) | **GET** /api/tag/{id} | getTag
*OpenApi.TagApi* | [**getTagsOrg**](docs/TagApi.md#getTagsOrg) | **GET** /api/tag/org/{orgid} | getAllTag
*OpenApi.TagApi* | [**updateTag**](docs/TagApi.md#updateTag) | **PUT** /api/tag/{id} | putTag
*OpenApi.TagAPIApi* | [**createMultipleTags**](docs/TagAPIApi.md#createMultipleTags) | **POST** /api/tag/multiple | postMultipleTag
*OpenApi.TagAPIApi* | [**createTag**](docs/TagAPIApi.md#createTag) | **POST** /api/tag/ | postTag
*OpenApi.TagAPIApi* | [**deleteTag**](docs/TagAPIApi.md#deleteTag) | **DELETE** /api/tag/{id} | deleteTag
*OpenApi.TagAPIApi* | [**getTag**](docs/TagAPIApi.md#getTag) | **GET** /api/tag/{id} | getTag
*OpenApi.TagAPIApi* | [**getTagsOrg**](docs/TagAPIApi.md#getTagsOrg) | **GET** /api/tag/org/{orgid} | getAllTag
*OpenApi.TagAPIApi* | [**updateTag**](docs/TagAPIApi.md#updateTag) | **PUT** /api/tag/{id} | putTag
*OpenApi.TagManyResponseApi* | [**createMultipleTags**](docs/TagManyResponseApi.md#createMultipleTags) | **POST** /api/tag/multiple | postMultipleTag
*OpenApi.TeamApi* | [**createTeam**](docs/TeamApi.md#createTeam) | **POST** /api/team/ | postTeam
*OpenApi.TeamApi* | [**getTeam**](docs/TeamApi.md#getTeam) | **GET** /api/team/{id} | getTeam
*OpenApi.TeamApi* | [**updateTeam**](docs/TeamApi.md#updateTeam) | **PUT** /api/team/{id} | putTeam
*OpenApi.TeamAPIApi* | [**assignTeamQuestion**](docs/TeamAPIApi.md#assignTeamQuestion) | **PUT** /api/team/{id}/kb/{kbid}/questions/{qid} | putTeamQuestions
*OpenApi.TeamAPIApi* | [**assignTeamTag**](docs/TeamAPIApi.md#assignTeamTag) | **PUT** /api/team/{id}/tags/{tagid} | putTeamTag
*OpenApi.TeamAPIApi* | [**createTeam**](docs/TeamAPIApi.md#createTeam) | **POST** /api/team/ | postTeam
*OpenApi.TeamAPIApi* | [**deleteTeam**](docs/TeamAPIApi.md#deleteTeam) | **DELETE** /api/team/{id} | deleteTeam
*OpenApi.TeamAPIApi* | [**deleteTeamTag**](docs/TeamAPIApi.md#deleteTeamTag) | **DELETE** /api/team/{id}/tags/{tagid} | deleteTeamTag
*OpenApi.TeamAPIApi* | [**getTeam**](docs/TeamAPIApi.md#getTeam) | **GET** /api/team/{id} | getTeam
*OpenApi.TeamAPIApi* | [**getTeamKB**](docs/TeamAPIApi.md#getTeamKB) | **GET** /api/team/{id}/kb/{kbid} | getTeamKB
*OpenApi.TeamAPIApi* | [**listTeamKB**](docs/TeamAPIApi.md#listTeamKB) | **GET** /api/team/{id}/kb | getAllTeamKB
*OpenApi.TeamAPIApi* | [**listTeamKBQuestions**](docs/TeamAPIApi.md#listTeamKBQuestions) | **GET** /api/team/{id}/kb/{kbid}/questions | getAllTeamQuestions
*OpenApi.TeamAPIApi* | [**listTeamTags**](docs/TeamAPIApi.md#listTeamTags) | **GET** /api/team/{id}/tags | getAllTeamTag
*OpenApi.TeamAPIApi* | [**listTeamUsers**](docs/TeamAPIApi.md#listTeamUsers) | **GET** /api/team/{id}/users | getAllTeamUsers
*OpenApi.TeamAPIApi* | [**updateTeam**](docs/TeamAPIApi.md#updateTeam) | **PUT** /api/team/{id} | putTeam
*OpenApi.TeamKBApi* | [**getTeamKB**](docs/TeamKBApi.md#getTeamKB) | **GET** /api/team/{id}/kb/{kbid} | getTeamKB
*OpenApi.TeamKBApi* | [**listTeamKB**](docs/TeamKBApi.md#listTeamKB) | **GET** /api/team/{id}/kb | getAllTeamKB
*OpenApi.TeamQuestionApi* | [**listTeamKBQuestions**](docs/TeamQuestionApi.md#listTeamKBQuestions) | **GET** /api/team/{id}/kb/{kbid}/questions | getAllTeamQuestions
*OpenApi.TeamTagApi* | [**listTeamTags**](docs/TeamTagApi.md#listTeamTags) | **GET** /api/team/{id}/tags | getAllTeamTag
*OpenApi.TeamUserApi* | [**listTeamUsers**](docs/TeamUserApi.md#listTeamUsers) | **GET** /api/team/{id}/users | getAllTeamUsers
*OpenApi.UIApi* | [**appGet**](docs/UIApi.md#appGet) | **GET** /app/ | 
*OpenApi.UserApi* | [**getUser**](docs/UserApi.md#getUser) | **GET** /api/user/{id} | getUser
*OpenApi.UserAPIApi* | [**deleteUserMessage**](docs/UserAPIApi.md#deleteUserMessage) | **DELETE** /api/user/{id}/messages/{messageid} | getAllUserRooms
*OpenApi.UserAPIApi* | [**getUser**](docs/UserAPIApi.md#getUser) | **GET** /api/user/{id} | getUser
*OpenApi.UserAPIApi* | [**listUserRooms**](docs/UserAPIApi.md#listUserRooms) | **GET** /api/user/{id}/rooms | getAllUserRooms
*OpenApi.UserAPIApi* | [**messageUser**](docs/UserAPIApi.md#messageUser) | **POST** /api/user/{id}/messages | getAllUserRooms

## Documentation for Models

 - [OpenApi.AuthLogin](docs/AuthLogin.md)
 - [OpenApi.AuthLoginResponse](docs/AuthLoginResponse.md)
 - [OpenApi.AuthWhoAmIResponse](docs/AuthWhoAmIResponse.md)
 - [OpenApi.Gpt](docs/Gpt.md)
 - [OpenApi.GptCreate](docs/GptCreate.md)
 - [OpenApi.GptCreateData](docs/GptCreateData.md)
 - [OpenApi.Kb](docs/Kb.md)
 - [OpenApi.KbCreate](docs/KbCreate.md)
 - [OpenApi.KbUpdate](docs/KbUpdate.md)
 - [OpenApi.Org](docs/Org.md)
 - [OpenApi.OrgCreateQuestionnaire](docs/OrgCreateQuestionnaire.md)
 - [OpenApi.OrgPlan](docs/OrgPlan.md)
 - [OpenApi.OrgQuestionnaire](docs/OrgQuestionnaire.md)
 - [OpenApi.OrgTag](docs/OrgTag.md)
 - [OpenApi.OrgTagInner](docs/OrgTagInner.md)
 - [OpenApi.OrgTeam](docs/OrgTeam.md)
 - [OpenApi.OrgTeamInner](docs/OrgTeamInner.md)
 - [OpenApi.OrgUpdate](docs/OrgUpdate.md)
 - [OpenApi.OrgUpdateQuestionnaire](docs/OrgUpdateQuestionnaire.md)
 - [OpenApi.OrgUser](docs/OrgUser.md)
 - [OpenApi.OrgUserCreate](docs/OrgUserCreate.md)
 - [OpenApi.OrgUserInner](docs/OrgUserInner.md)
 - [OpenApi.Room](docs/Room.md)
 - [OpenApi.Tag](docs/Tag.md)
 - [OpenApi.TagCreate](docs/TagCreate.md)
 - [OpenApi.TagManyCreate](docs/TagManyCreate.md)
 - [OpenApi.TagManyResponse](docs/TagManyResponse.md)
 - [OpenApi.TagUpdate](docs/TagUpdate.md)
 - [OpenApi.Team](docs/Team.md)
 - [OpenApi.TeamCreate](docs/TeamCreate.md)
 - [OpenApi.TeamKB](docs/TeamKB.md)
 - [OpenApi.TeamQuestion](docs/TeamQuestion.md)
 - [OpenApi.TeamQuestionInner](docs/TeamQuestionInner.md)
 - [OpenApi.TeamTag](docs/TeamTag.md)
 - [OpenApi.TeamUpdate](docs/TeamUpdate.md)
 - [OpenApi.TeamUser](docs/TeamUser.md)
 - [OpenApi.TeamUserInner](docs/TeamUserInner.md)
 - [OpenApi.UnknownInterface](docs/UnknownInterface.md)
 - [OpenApi.User](docs/User.md)

## Documentation for Authorization

 All endpoints do not require authorization.

