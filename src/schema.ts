// import { projectSubscriptions } from './models/subscriptions'
import { projectQueries } from './models/queries'
import { projectMutations } from './models/mutations'
/* 
import { deviceSubscriptions } from './models/subscriptions'
import { deviceQueries } from './models/queries'
import { deviceMutations } from './models/mutations'
import { buildingSubscriptions } from './models/subscriptions'
import { buildingQueries } from './models/queries'
import { buildingMutations } from './models/mutations'
import { scheduleSubscriptions } from './models/subscriptions'
import { scheduleQueries } from './models/queries'
import { scheduleMutations } from './models/mutations'
import { holidaySubscriptions } from './models/subscriptions'
import { holidayQueries } from './models/queries'
import { holidayMutations } from './models/mutations'
import { programSubscriptions } from './models/subscriptions'
import { programQueries } from './models/queries'
import { programMutations } from './models/mutations'
import { graphicSubscriptions } from './models/subscriptions'
import { graphicQueries } from './models/queries'
import { graphicMutations } from './models/mutations'
import { pidSubscriptions } from './models/subscriptions'
import { pidQueries } from './models/queries'
import { pidMutations } from './models/mutations'
import { variableSubscriptions } from './models/subscriptions'
import { variableQueries } from './models/queries'
import { variableMutations } from './models/mutations'
import { outputSubscriptions } from './models/subscriptions'
import { outputQueries } from './models/queries'
import { outputMutations } from './models/mutations'
import { inputSubscriptions } from './models/subscriptions'
import { inputQueries } from './models/queries'
import { inputMutations } from './models/mutations'
import { fileSubscriptions } from './models/subscriptions'
import { fileQueries } from './models/queries'
import { fileMutations } from './models/mutations' 
*/
import { authMutations, authQueries } from './auth'
import { GraphQLSchema, GraphQLObjectType } from 'graphql'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      // merge_the_query_fields_here
      ...projectQueries,
      /* ...buildingQueries,
      ...deviceQueries,
      ...scheduleQueries,
      ...holidayQueries,
      ...programQueries,
      ...graphicQueries,
      ...pidQueries,
      ...variableQueries,
      ...outputQueries,
      ...inputQueries,
      ...fileQueries, */
      ...authQueries,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      // merge_the_mutation_fields_here
      ...projectMutations,
      /*  
      ...buildingMutations,
      ...deviceMutations,
      ...scheduleMutations,
      ...holidayMutations,
      ...programMutations,
      ...graphicMutations,
      ...pidMutations,
      ...variableMutations,
      ...outputMutations,
      ...inputMutations,
      ...fileMutations, 
      */
      ...authMutations,
    },
  }),
  /* subscription: new GraphQLObjectType({
    name: 'Subscription',
    fields: {
      // merge_the_subscription_fields_here
      ...projectSubscriptions,
      ...buildingSubscriptions,
      ...deviceSubscriptions,
      ...scheduleSubscriptions,
      ...holidaySubscriptions,
      ...programSubscriptions,
      ...graphicSubscriptions,
      ...pidSubscriptions,
      ...variableSubscriptions,
      ...outputSubscriptions,
      ...inputSubscriptions,
      ...fileSubscriptions,
    },
  }), */
})
