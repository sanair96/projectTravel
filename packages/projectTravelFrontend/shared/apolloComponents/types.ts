export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Query = {
   __typename?: 'Query',
  hello?: Maybe<Scalars['String']>,
};

export enum Values {
  Hello = 'HELLO',
  World = 'WORLD'
}
