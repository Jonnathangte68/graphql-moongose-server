const express               = require('express');
const { importSchema }      = require('graphql-import');
const { ApolloServer, gql } = require('apollo-server-express');
const dbConection           = require('./config');

const typeDefs              = importSchema('./schema.graphql');
const resolvers             = require('./src/resolvers');

const UserAPI               = require('./src/datasources/user');
const SkillAPI              = require('./src/datasources/skill');
const VideoAPI              = require('./src/datasources/video');
const ContentTypeAPI        = require('./src/datasources/content_type');
const PassageAPI            = require('./src/datasources/passage');
const TagAPI                = require('./src/datasources/tag');
const QuestionAPI           = require('./src/datasources/question');
const HintAPI               = require('./src/datasources/hint');
const SolutionAPI           = require('./src/datasources/solution');
const ChoiceAPI             = require('./src/datasources/choice');
const AnswerAPI             = require('./src/datasources/answer');

const verifyToken           = require('./src/utils/verifyToken');

const dataSources = () => ({
  userAPI: new UserAPI(),
  skillAPI: new SkillAPI(),
  videoAPI: new VideoAPI(),
  contentTypeAPI: new ContentTypeAPI(),
  passageAPI: new PassageAPI(),
  tagAPI: new TagAPI(),
  questionAPI: new QuestionAPI(),
  hintAPI: new HintAPI(),
  solutionAPI: new SolutionAPI(),
  choiceAPI: new ChoiceAPI(),
  answerAPI: new AnswerAPI()
});

dbConection.once('open', () => {
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: async ({req}) => ({
      ...req,
      user: await verifyToken(req)
    }),
    dataSources
  });

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});