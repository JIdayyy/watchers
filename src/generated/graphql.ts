import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Account = {
  __typename?: 'Account';
  access_token: Maybe<Scalars['String']>;
  expires_at: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  id_token: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token: Maybe<Scalars['String']>;
  scope: Maybe<Scalars['String']>;
  session_state: Maybe<Scalars['String']>;
  token_type: Maybe<Scalars['String']>;
  type: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at: Maybe<Scalars['Float']>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int'];
  access_token: Scalars['Int'];
  expires_at: Scalars['Int'];
  id: Scalars['Int'];
  id_token: Scalars['Int'];
  provider: Scalars['Int'];
  providerAccountId: Scalars['Int'];
  refresh_token: Scalars['Int'];
  scope: Scalars['Int'];
  session_state: Scalars['Int'];
  token_type: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  user: UserCreateNestedOneWithoutAccountInput;
};

export type AccountCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg: Maybe<AccountAvgAggregate>;
  _count: Maybe<AccountCountAggregate>;
  _max: Maybe<AccountMaxAggregate>;
  _min: Maybe<AccountMinAggregate>;
  _sum: Maybe<AccountSumAggregate>;
  access_token: Maybe<Scalars['String']>;
  expires_at: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  id_token: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token: Maybe<Scalars['String']>;
  scope: Maybe<Scalars['String']>;
  session_state: Maybe<Scalars['String']>;
  token_type: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token: Maybe<Scalars['String']>;
  expires_at: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  id_token: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
  providerAccountId: Maybe<Scalars['String']>;
  refresh_token: Maybe<Scalars['String']>;
  scope: Maybe<Scalars['String']>;
  session_state: Maybe<Scalars['String']>;
  token_type: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token: Maybe<Scalars['String']>;
  expires_at: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  id_token: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
  providerAccountId: Maybe<Scalars['String']>;
  refresh_token: Maybe<Scalars['String']>;
  scope: Maybe<Scalars['String']>;
  session_state: Maybe<Scalars['String']>;
  token_type: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  _count?: InputMaybe<AccountCountOrderByAggregateInput>;
  _max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<AccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<AccountSumOrderByAggregateInput>;
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  ExpiresAt = 'expires_at',
  Id = 'id',
  IdToken = 'id_token',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  id_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refresh_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  session_state?: InputMaybe<StringNullableWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at: Maybe<Scalars['Int']>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg: Maybe<AccountAvgAggregate>;
  _count: Maybe<AccountCountAggregate>;
  _max: Maybe<AccountMaxAggregate>;
  _min: Maybe<AccountMinAggregate>;
  _sum: Maybe<AccountSumAggregate>;
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _count: Maybe<CategoryCountAggregate>;
  _max: Maybe<CategoryMaxAggregate>;
  _min: Maybe<CategoryMinAggregate>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _count: Maybe<CommentCountAggregate>;
  _max: Maybe<CommentMaxAggregate>;
  _min: Maybe<CommentMinAggregate>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _count: Maybe<PostCountAggregate>;
  _max: Maybe<PostMaxAggregate>;
  _min: Maybe<PostMinAggregate>;
};

export type AggregatePreference = {
  __typename?: 'AggregatePreference';
  _count: Maybe<PreferenceCountAggregate>;
  _max: Maybe<PreferenceMaxAggregate>;
  _min: Maybe<PreferenceMinAggregate>;
};

export type AggregateResetPassword = {
  __typename?: 'AggregateResetPassword';
  _count: Maybe<ResetPasswordCountAggregate>;
  _max: Maybe<ResetPasswordMaxAggregate>;
  _min: Maybe<ResetPasswordMinAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count: Maybe<SessionCountAggregate>;
  _max: Maybe<SessionMaxAggregate>;
  _min: Maybe<SessionMinAggregate>;
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  _count: Maybe<TagCountAggregate>;
  _max: Maybe<TagMaxAggregate>;
  _min: Maybe<TagMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count: Maybe<UserCountAggregate>;
  _max: Maybe<UserMaxAggregate>;
  _min: Maybe<UserMinAggregate>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count: Maybe<VerificationTokenCountAggregate>;
  _max: Maybe<VerificationTokenMaxAggregate>;
  _min: Maybe<VerificationTokenMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Category = {
  __typename?: 'Category';
  Post: Array<Post>;
  _count: Maybe<CategoryCount>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type CategoryPostArgs = {
  cursor: InputMaybe<PostWhereUniqueInput>;
  distinct: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PostWhereInput>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  Post: Scalars['Int'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type CategoryCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
  Post?: InputMaybe<PostCreateNestedManyWithoutCategoryInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateNestedOneWithoutPostInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutPostInput>;
  create?: InputMaybe<CategoryCreateWithoutPostInput>;
};

export type CategoryCreateOrConnectWithoutPostInput = {
  create: CategoryCreateWithoutPostInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutPostInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  _count: Maybe<CategoryCountAggregate>;
  _max: Maybe<CategoryMaxAggregate>;
  _min: Maybe<CategoryMinAggregate>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type CategoryMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type CategoryMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryMinOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  Post?: InputMaybe<PostOrderByRelationAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CategoryUpdateInput = {
  Post?: InputMaybe<PostUpdateManyWithoutCategoryInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateOneWithoutPostInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutPostInput>;
  create?: InputMaybe<CategoryCreateWithoutPostInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CategoryUpdateWithoutPostInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutPostInput>;
};

export type CategoryUpdateWithoutPostInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutPostInput = {
  create: CategoryCreateWithoutPostInput;
  update: CategoryUpdateWithoutPostInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  Post?: InputMaybe<PostListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  Comment_A: Array<Comment>;
  Comment_B: Array<Comment>;
  Post: Post;
  _count: Maybe<CommentCount>;
  author: User;
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  parent_id: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['String']>;
  postSlug: Scalars['String'];
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
};


export type CommentComment_AArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type CommentComment_BArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};

export type CommentCount = {
  __typename?: 'CommentCount';
  Comment_A: Scalars['Int'];
  Comment_B: Scalars['Int'];
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  parent_id: Scalars['Int'];
  picture: Scalars['Int'];
  postSlug: Scalars['Int'];
  updated_at: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CommentCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parent_id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  postSlug?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentCreateInput = {
  Comment_A?: InputMaybe<CommentCreateNestedManyWithoutComment_BInput>;
  Comment_B?: InputMaybe<CommentCreateNestedManyWithoutComment_AInput>;
  Post: PostCreateNestedOneWithoutCommentInput;
  author: UserCreateNestedOneWithoutCommentInput;
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyAuthorInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  postSlug: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyAuthorInputEnvelope = {
  data: Array<CommentCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateManyInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  postSlug: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CommentCreateManyPostInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CommentCreateManyPostInputEnvelope = {
  data: Array<CommentCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<CommentCreateManyAuthorInputEnvelope>;
};

export type CommentCreateNestedManyWithoutComment_AInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutComment_AInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutComment_AInput>>;
};

export type CommentCreateNestedManyWithoutComment_BInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutComment_BInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutComment_BInput>>;
};

export type CommentCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutPostInput>>;
  createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
};

export type CommentCreateOrConnectWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutComment_AInput = {
  create: CommentCreateWithoutComment_AInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutComment_BInput = {
  create: CommentCreateWithoutComment_BInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutAuthorInput = {
  Comment_A?: InputMaybe<CommentCreateNestedManyWithoutComment_BInput>;
  Comment_B?: InputMaybe<CommentCreateNestedManyWithoutComment_AInput>;
  Post: PostCreateNestedOneWithoutCommentInput;
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutComment_AInput = {
  Comment_B?: InputMaybe<CommentCreateNestedManyWithoutComment_AInput>;
  Post: PostCreateNestedOneWithoutCommentInput;
  author: UserCreateNestedOneWithoutCommentInput;
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutComment_BInput = {
  Comment_A?: InputMaybe<CommentCreateNestedManyWithoutComment_BInput>;
  Post: PostCreateNestedOneWithoutCommentInput;
  author: UserCreateNestedOneWithoutCommentInput;
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutPostInput = {
  Comment_A?: InputMaybe<CommentCreateNestedManyWithoutComment_BInput>;
  Comment_B?: InputMaybe<CommentCreateNestedManyWithoutComment_AInput>;
  author: UserCreateNestedOneWithoutCommentInput;
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  _count: Maybe<CommentCountAggregate>;
  _max: Maybe<CommentMaxAggregate>;
  _min: Maybe<CommentMinAggregate>;
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  parent_id: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['String']>;
  postSlug: Scalars['String'];
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['String']>;
  postSlug: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type CommentMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parent_id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  postSlug?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['String']>;
  postSlug: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type CommentMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parent_id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  postSlug?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithAggregationInput = {
  _count?: InputMaybe<CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<CommentMinOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parent_id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  postSlug?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationInput = {
  Comment_A?: InputMaybe<CommentOrderByRelationAggregateInput>;
  Comment_B?: InputMaybe<CommentOrderByRelationAggregateInput>;
  Post?: InputMaybe<PostOrderByWithRelationInput>;
  author?: InputMaybe<UserOrderByWithRelationInput>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parent_id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  postSlug?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  ParentId = 'parent_id',
  Picture = 'picture',
  PostSlug = 'postSlug',
  UpdatedAt = 'updated_at',
  UserId = 'userId'
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  parent_id?: InputMaybe<StringNullableFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  postSlug?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  parent_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  picture?: InputMaybe<StringNullableWithAggregatesFilter>;
  postSlug?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type CommentUpdateInput = {
  Comment_A?: InputMaybe<CommentUpdateManyWithoutComment_BInput>;
  Comment_B?: InputMaybe<CommentUpdateManyWithoutComment_AInput>;
  Post?: InputMaybe<PostUpdateOneRequiredWithoutCommentInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutAuthorInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutComment_AInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutComment_BInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<CommentCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type CommentUpdateManyWithoutComment_AInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutComment_AInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutComment_AInput>>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutComment_AInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutComment_AInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutComment_AInput>>;
};

export type CommentUpdateManyWithoutComment_BInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutComment_BInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutComment_BInput>>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutComment_BInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutComment_BInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutComment_BInput>>;
};

export type CommentUpdateManyWithoutPostInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutPostInput>>;
  createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  data: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutComment_AInput = {
  data: CommentUpdateWithoutComment_AInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutComment_BInput = {
  data: CommentUpdateWithoutComment_BInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutAuthorInput = {
  Comment_A?: InputMaybe<CommentUpdateManyWithoutComment_BInput>;
  Comment_B?: InputMaybe<CommentUpdateManyWithoutComment_AInput>;
  Post?: InputMaybe<PostUpdateOneRequiredWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutComment_AInput = {
  Comment_B?: InputMaybe<CommentUpdateManyWithoutComment_AInput>;
  Post?: InputMaybe<PostUpdateOneRequiredWithoutCommentInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutComment_BInput = {
  Comment_A?: InputMaybe<CommentUpdateManyWithoutComment_BInput>;
  Post?: InputMaybe<PostUpdateOneRequiredWithoutCommentInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutPostInput = {
  Comment_A?: InputMaybe<CommentUpdateManyWithoutComment_BInput>;
  Comment_B?: InputMaybe<CommentUpdateManyWithoutComment_AInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutCommentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  update: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutComment_AInput = {
  create: CommentCreateWithoutComment_AInput;
  update: CommentUpdateWithoutComment_AInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutComment_BInput = {
  create: CommentCreateWithoutComment_BInput;
  update: CommentUpdateWithoutComment_BInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  update: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  Comment_A?: InputMaybe<CommentListRelationFilter>;
  Comment_B?: InputMaybe<CommentListRelationFilter>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  Post?: InputMaybe<PostRelationFilter>;
  author?: InputMaybe<UserRelationFilter>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  parent_id?: InputMaybe<StringNullableFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  postSlug?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Count = {
  __typename?: 'Count';
  count: Scalars['Float'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type Follow = {
  __typename?: 'Follow';
  count: Scalars['Float'];
  isFollowing: Scalars['Boolean'];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  createCategory: Category;
  createComment: Comment;
  createManyAccount: AffectedRowsOutput;
  createManyCategory: AffectedRowsOutput;
  createManyComment: AffectedRowsOutput;
  createManyPost: AffectedRowsOutput;
  createManyPreference: AffectedRowsOutput;
  createManyResetPassword: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyTag: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyVerificationToken: AffectedRowsOutput;
  createPost: Post;
  createPreference: Preference;
  createResetPassword: ResetPassword;
  createSession: Session;
  createTag: Tag;
  createUser: User;
  createVerificationToken: VerificationToken;
  deleteAccount: Maybe<Account>;
  deleteCategory: Maybe<Category>;
  deleteComment: Maybe<Comment>;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyCategory: AffectedRowsOutput;
  deleteManyComment: AffectedRowsOutput;
  deleteManyPost: AffectedRowsOutput;
  deleteManyPreference: AffectedRowsOutput;
  deleteManyResetPassword: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyTag: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyVerificationToken: AffectedRowsOutput;
  deletePost: Maybe<Post>;
  deletePreference: Maybe<Preference>;
  deleteResetPassword: Maybe<ResetPassword>;
  deleteSession: Maybe<Session>;
  deleteTag: Maybe<Tag>;
  deleteUser: Maybe<User>;
  deleteVerificationToken: Maybe<VerificationToken>;
  login: User;
  logout: Scalars['String'];
  me: User;
  register: User;
  updateAccount: Maybe<Account>;
  updateCategory: Maybe<Category>;
  updateComment: Maybe<Comment>;
  updateManyAccount: AffectedRowsOutput;
  updateManyCategory: AffectedRowsOutput;
  updateManyComment: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  updateManyPreference: AffectedRowsOutput;
  updateManyResetPassword: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyTag: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  updatePost: Maybe<Post>;
  updatePreference: Maybe<Preference>;
  updateResetPassword: Maybe<ResetPassword>;
  updateSession: Maybe<Session>;
  updateTag: Maybe<Tag>;
  updateUser: Maybe<User>;
  updateVerificationToken: Maybe<VerificationToken>;
  uploadCoverPicture: Post;
  uploadPostPicture: Picture;
  upsertAccount: Account;
  upsertCategory: Category;
  upsertComment: Comment;
  upsertPost: Post;
  upsertPreference: Preference;
  upsertResetPassword: ResetPassword;
  upsertSession: Session;
  upsertTag: Tag;
  upsertUser: User;
  upsertVerificationToken: VerificationToken;
};


export type MutationCreateAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCategoryArgs = {
  data: Array<CategoryCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCommentArgs = {
  data: Array<CommentCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPostArgs = {
  data: Array<PostCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPreferenceArgs = {
  data: Array<PreferenceCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyResetPasswordArgs = {
  data: Array<ResetPasswordCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTagArgs = {
  data: Array<TagCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreatePreferenceArgs = {
  data: PreferenceCreateInput;
};


export type MutationCreateResetPasswordArgs = {
  data: ResetPasswordCreateInput;
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
};


export type MutationDeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteManyAccountArgs = {
  where: InputMaybe<AccountWhereInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyCommentArgs = {
  where: InputMaybe<CommentWhereInput>;
};


export type MutationDeleteManyPostArgs = {
  where: InputMaybe<PostWhereInput>;
};


export type MutationDeleteManyPreferenceArgs = {
  where: InputMaybe<PreferenceWhereInput>;
};


export type MutationDeleteManyResetPasswordArgs = {
  where: InputMaybe<ResetPasswordWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteManyTagArgs = {
  where: InputMaybe<TagWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyVerificationTokenArgs = {
  where: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeletePreferenceArgs = {
  where: PreferenceWhereUniqueInput;
};


export type MutationDeleteResetPasswordArgs = {
  where: ResetPasswordWhereUniqueInput;
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationUpdateAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where: InputMaybe<AccountWhereInput>;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where: InputMaybe<CategoryWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where: InputMaybe<CommentWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where: InputMaybe<PostWhereInput>;
};


export type MutationUpdateManyPreferenceArgs = {
  data: PreferenceUpdateManyMutationInput;
  where: InputMaybe<PreferenceWhereInput>;
};


export type MutationUpdateManyResetPasswordArgs = {
  data: ResetPasswordUpdateManyMutationInput;
  where: InputMaybe<ResetPasswordWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where: InputMaybe<SessionWhereInput>;
};


export type MutationUpdateManyTagArgs = {
  data: TagUpdateManyMutationInput;
  where: InputMaybe<TagWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyVerificationTokenArgs = {
  data: VerificationTokenUpdateManyMutationInput;
  where: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdatePreferenceArgs = {
  data: PreferenceUpdateInput;
  where: PreferenceWhereUniqueInput;
};


export type MutationUpdateResetPasswordArgs = {
  data: ResetPasswordUpdateInput;
  where: ResetPasswordWhereUniqueInput;
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUploadCoverPictureArgs = {
  file: Scalars['Upload'];
};


export type MutationUploadPostPictureArgs = {
  file: Scalars['Upload'];
};


export type MutationUpsertAccountArgs = {
  create: AccountCreateInput;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertPreferenceArgs = {
  create: PreferenceCreateInput;
  update: PreferenceUpdateInput;
  where: PreferenceWhereUniqueInput;
};


export type MutationUpsertResetPasswordArgs = {
  create: ResetPasswordCreateInput;
  update: ResetPasswordUpdateInput;
  where: ResetPasswordWhereUniqueInput;
};


export type MutationUpsertSessionArgs = {
  create: SessionCreateInput;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertTagArgs = {
  create: TagCreateInput;
  update: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertVerificationTokenArgs = {
  create: VerificationTokenCreateInput;
  update: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Picture = {
  __typename?: 'Picture';
  url: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  Category: Maybe<Category>;
  Comment: Array<Comment>;
  Tags: Array<Tag>;
  User_likes: Array<User>;
  _count: Maybe<PostCount>;
  author: User;
  categoryId: Maybe<Scalars['String']>;
  commentCount: Maybe<Count>;
  content: Scalars['String'];
  cover_picture: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  isDraft: Scalars['Boolean'];
  is_disabled: Scalars['Boolean'];
  likeCount: Maybe<Count>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
};


export type PostCommentArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type PostTagsArgs = {
  cursor: InputMaybe<TagWhereUniqueInput>;
  distinct: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TagWhereInput>;
};


export type PostUser_LikesArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};

export type PostCount = {
  __typename?: 'PostCount';
  Comment: Scalars['Int'];
  Tags: Scalars['Int'];
  User_likes: Scalars['Int'];
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int'];
  categoryId: Scalars['Int'];
  content: Scalars['Int'];
  cover_picture: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  isDraft: Scalars['Int'];
  is_disabled: Scalars['Int'];
  slug: Scalars['Int'];
  title: Scalars['Int'];
  updated_at: Scalars['Int'];
  userId: Scalars['Int'];
};

export type PostCountOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  cover_picture?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDraft?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostCreateInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutPostInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  Tags?: InputMaybe<TagCreateNestedManyWithoutPostInput>;
  User_likes?: InputMaybe<UserCreateNestedManyWithoutPost_LikesInput>;
  author: UserCreateNestedOneWithoutPostInput;
  content: Scalars['String'];
  cover_picture?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type PostCreateManyAuthorInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  content: Scalars['String'];
  cover_picture?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PostCreateManyCategoryInput = {
  content: Scalars['String'];
  cover_picture?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type PostCreateManyCategoryInputEnvelope = {
  data: Array<PostCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PostCreateManyInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  content: Scalars['String'];
  cover_picture?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<PostCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<PostCreateManyCategoryInputEnvelope>;
};

export type PostCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutTagsInput>>;
  create?: InputMaybe<Array<PostCreateWithoutTagsInput>>;
};

export type PostCreateNestedManyWithoutUser_LikesInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutUser_LikesInput>>;
  create?: InputMaybe<Array<PostCreateWithoutUser_LikesInput>>;
};

export type PostCreateNestedOneWithoutCommentInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutCommentInput>;
  create?: InputMaybe<PostCreateWithoutCommentInput>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutCategoryInput = {
  create: PostCreateWithoutCategoryInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutCommentInput = {
  create: PostCreateWithoutCommentInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutTagsInput = {
  create: PostCreateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutUser_LikesInput = {
  create: PostCreateWithoutUser_LikesInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutPostInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  Tags?: InputMaybe<TagCreateNestedManyWithoutPostInput>;
  User_likes?: InputMaybe<UserCreateNestedManyWithoutPost_LikesInput>;
  content: Scalars['String'];
  cover_picture?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type PostCreateWithoutCategoryInput = {
  Comment?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  Tags?: InputMaybe<TagCreateNestedManyWithoutPostInput>;
  User_likes?: InputMaybe<UserCreateNestedManyWithoutPost_LikesInput>;
  author: UserCreateNestedOneWithoutPostInput;
  content: Scalars['String'];
  cover_picture?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type PostCreateWithoutCommentInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutPostInput>;
  Tags?: InputMaybe<TagCreateNestedManyWithoutPostInput>;
  User_likes?: InputMaybe<UserCreateNestedManyWithoutPost_LikesInput>;
  author: UserCreateNestedOneWithoutPostInput;
  content: Scalars['String'];
  cover_picture?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type PostCreateWithoutTagsInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutPostInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  User_likes?: InputMaybe<UserCreateNestedManyWithoutPost_LikesInput>;
  author: UserCreateNestedOneWithoutPostInput;
  content: Scalars['String'];
  cover_picture?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type PostCreateWithoutUser_LikesInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutPostInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  Tags?: InputMaybe<TagCreateNestedManyWithoutPostInput>;
  author: UserCreateNestedOneWithoutPostInput;
  content: Scalars['String'];
  cover_picture?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  _count: Maybe<PostCountAggregate>;
  _max: Maybe<PostMaxAggregate>;
  _min: Maybe<PostMinAggregate>;
  categoryId: Maybe<Scalars['String']>;
  content: Scalars['String'];
  cover_picture: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  isDraft: Scalars['Boolean'];
  is_disabled: Scalars['Boolean'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  categoryId: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  cover_picture: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  isDraft: Maybe<Scalars['Boolean']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  slug: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type PostMaxOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  cover_picture?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDraft?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  categoryId: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  cover_picture: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  isDraft: Maybe<Scalars['Boolean']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  slug: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type PostMinOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  cover_picture?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDraft?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithAggregationInput = {
  _count?: InputMaybe<PostCountOrderByAggregateInput>;
  _max?: InputMaybe<PostMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostMinOrderByAggregateInput>;
  categoryId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  cover_picture?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDraft?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  Category?: InputMaybe<CategoryOrderByWithRelationInput>;
  Comment?: InputMaybe<CommentOrderByRelationAggregateInput>;
  Tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  User_likes?: InputMaybe<UserOrderByRelationAggregateInput>;
  author?: InputMaybe<UserOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  cover_picture?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDraft?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: InputMaybe<PostWhereInput>;
  isNot?: InputMaybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  CategoryId = 'categoryId',
  Content = 'content',
  CoverPicture = 'cover_picture',
  CreatedAt = 'created_at',
  Id = 'id',
  IsDraft = 'isDraft',
  IsDisabled = 'is_disabled',
  Slug = 'slug',
  Title = 'title',
  UpdatedAt = 'updated_at',
  UserId = 'userId'
}

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<PostScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereInput>>;
  OR?: InputMaybe<Array<PostScalarWhereInput>>;
  categoryId?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringFilter>;
  cover_picture?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isDraft?: InputMaybe<BoolFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  categoryId?: InputMaybe<StringNullableWithAggregatesFilter>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  cover_picture?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isDraft?: InputMaybe<BoolWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type PostUpdateInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutPostInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutPostInput>;
  Tags?: InputMaybe<TagUpdateManyWithoutPostInput>;
  User_likes?: InputMaybe<UserUpdateManyWithoutPost_LikesInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutPostInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutCategoryInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutTagsInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutUser_LikesInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<PostCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<PostCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type PostUpdateManyWithoutTagsInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutTagsInput>>;
  create?: InputMaybe<Array<PostCreateWithoutTagsInput>>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutTagsInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type PostUpdateManyWithoutUser_LikesInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutUser_LikesInput>>;
  create?: InputMaybe<Array<PostCreateWithoutUser_LikesInput>>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutUser_LikesInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutUser_LikesInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutUser_LikesInput>>;
};

export type PostUpdateOneRequiredWithoutCommentInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutCommentInput>;
  create?: InputMaybe<PostCreateWithoutCommentInput>;
  update?: InputMaybe<PostUpdateWithoutCommentInput>;
  upsert?: InputMaybe<PostUpsertWithoutCommentInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutCategoryInput = {
  data: PostUpdateWithoutCategoryInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutTagsInput = {
  data: PostUpdateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutUser_LikesInput = {
  data: PostUpdateWithoutUser_LikesInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutPostInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutPostInput>;
  Tags?: InputMaybe<TagUpdateManyWithoutPostInput>;
  User_likes?: InputMaybe<UserUpdateManyWithoutPost_LikesInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCategoryInput = {
  Comment?: InputMaybe<CommentUpdateManyWithoutPostInput>;
  Tags?: InputMaybe<TagUpdateManyWithoutPostInput>;
  User_likes?: InputMaybe<UserUpdateManyWithoutPost_LikesInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutPostInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCommentInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutPostInput>;
  Tags?: InputMaybe<TagUpdateManyWithoutPostInput>;
  User_likes?: InputMaybe<UserUpdateManyWithoutPost_LikesInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutPostInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutTagsInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutPostInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutPostInput>;
  User_likes?: InputMaybe<UserUpdateManyWithoutPost_LikesInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutPostInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutUser_LikesInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutPostInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutPostInput>;
  Tags?: InputMaybe<TagUpdateManyWithoutPostInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutPostInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutCategoryInput = {
  create: PostCreateWithoutCategoryInput;
  update: PostUpdateWithoutCategoryInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutTagsInput = {
  create: PostCreateWithoutTagsInput;
  update: PostUpdateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutUser_LikesInput = {
  create: PostCreateWithoutUser_LikesInput;
  update: PostUpdateWithoutUser_LikesInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutCommentInput = {
  create: PostCreateWithoutCommentInput;
  update: PostUpdateWithoutCommentInput;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  Category?: InputMaybe<CategoryRelationFilter>;
  Comment?: InputMaybe<CommentListRelationFilter>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  Tags?: InputMaybe<TagListRelationFilter>;
  User_likes?: InputMaybe<UserListRelationFilter>;
  author?: InputMaybe<UserRelationFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringFilter>;
  cover_picture?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isDraft?: InputMaybe<BoolFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Preference = {
  __typename?: 'Preference';
  User: User;
  bio: Maybe<Scalars['String']>;
  color_1: Maybe<Scalars['String']>;
  color_2: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  education: Maybe<Scalars['String']>;
  id: Scalars['String'];
  job: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  showEmail: Scalars['Boolean'];
  skills: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
  website: Maybe<Scalars['String']>;
};

export type PreferenceCountAggregate = {
  __typename?: 'PreferenceCountAggregate';
  _all: Scalars['Int'];
  bio: Scalars['Int'];
  color_1: Scalars['Int'];
  color_2: Scalars['Int'];
  created_at: Scalars['Int'];
  education: Scalars['Int'];
  id: Scalars['Int'];
  job: Scalars['Int'];
  location: Scalars['Int'];
  showEmail: Scalars['Int'];
  skills: Scalars['Int'];
  updated_at: Scalars['Int'];
  userId: Scalars['Int'];
  website: Scalars['Int'];
};

export type PreferenceCountOrderByAggregateInput = {
  bio?: InputMaybe<SortOrder>;
  color_1?: InputMaybe<SortOrder>;
  color_2?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  showEmail?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type PreferenceCreateInput = {
  User: UserCreateNestedOneWithoutPreferenceInput;
  bio?: InputMaybe<Scalars['String']>;
  color_1?: InputMaybe<Scalars['String']>;
  color_2?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  education?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  job?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  showEmail?: InputMaybe<Scalars['Boolean']>;
  skills?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type PreferenceCreateManyInput = {
  bio?: InputMaybe<Scalars['String']>;
  color_1?: InputMaybe<Scalars['String']>;
  color_2?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  education?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  job?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  showEmail?: InputMaybe<Scalars['Boolean']>;
  skills?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type PreferenceCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<PreferenceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PreferenceCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PreferenceCreateWithoutUserInput>;
};

export type PreferenceCreateOrConnectWithoutUserInput = {
  create: PreferenceCreateWithoutUserInput;
  where: PreferenceWhereUniqueInput;
};

export type PreferenceCreateWithoutUserInput = {
  bio?: InputMaybe<Scalars['String']>;
  color_1?: InputMaybe<Scalars['String']>;
  color_2?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  education?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  job?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  showEmail?: InputMaybe<Scalars['Boolean']>;
  skills?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type PreferenceGroupBy = {
  __typename?: 'PreferenceGroupBy';
  _count: Maybe<PreferenceCountAggregate>;
  _max: Maybe<PreferenceMaxAggregate>;
  _min: Maybe<PreferenceMinAggregate>;
  bio: Maybe<Scalars['String']>;
  color_1: Maybe<Scalars['String']>;
  color_2: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  education: Maybe<Scalars['String']>;
  id: Scalars['String'];
  job: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  showEmail: Scalars['Boolean'];
  skills: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
  website: Maybe<Scalars['String']>;
};

export type PreferenceMaxAggregate = {
  __typename?: 'PreferenceMaxAggregate';
  bio: Maybe<Scalars['String']>;
  color_1: Maybe<Scalars['String']>;
  color_2: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  education: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  job: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  showEmail: Maybe<Scalars['Boolean']>;
  skills: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  website: Maybe<Scalars['String']>;
};

export type PreferenceMaxOrderByAggregateInput = {
  bio?: InputMaybe<SortOrder>;
  color_1?: InputMaybe<SortOrder>;
  color_2?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  showEmail?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type PreferenceMinAggregate = {
  __typename?: 'PreferenceMinAggregate';
  bio: Maybe<Scalars['String']>;
  color_1: Maybe<Scalars['String']>;
  color_2: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  education: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  job: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  showEmail: Maybe<Scalars['Boolean']>;
  skills: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  website: Maybe<Scalars['String']>;
};

export type PreferenceMinOrderByAggregateInput = {
  bio?: InputMaybe<SortOrder>;
  color_1?: InputMaybe<SortOrder>;
  color_2?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  showEmail?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type PreferenceOrderByWithAggregationInput = {
  _count?: InputMaybe<PreferenceCountOrderByAggregateInput>;
  _max?: InputMaybe<PreferenceMaxOrderByAggregateInput>;
  _min?: InputMaybe<PreferenceMinOrderByAggregateInput>;
  bio?: InputMaybe<SortOrder>;
  color_1?: InputMaybe<SortOrder>;
  color_2?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  showEmail?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type PreferenceOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByWithRelationInput>;
  bio?: InputMaybe<SortOrder>;
  color_1?: InputMaybe<SortOrder>;
  color_2?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  showEmail?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type PreferenceRelationFilter = {
  is?: InputMaybe<PreferenceWhereInput>;
  isNot?: InputMaybe<PreferenceWhereInput>;
};

export enum PreferenceScalarFieldEnum {
  Bio = 'bio',
  Color_1 = 'color_1',
  Color_2 = 'color_2',
  CreatedAt = 'created_at',
  Education = 'education',
  Id = 'id',
  Job = 'job',
  Location = 'location',
  ShowEmail = 'showEmail',
  Skills = 'skills',
  UpdatedAt = 'updated_at',
  UserId = 'userId',
  Website = 'website'
}

export type PreferenceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PreferenceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PreferenceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PreferenceScalarWhereWithAggregatesInput>>;
  bio?: InputMaybe<StringNullableWithAggregatesFilter>;
  color_1?: InputMaybe<StringNullableWithAggregatesFilter>;
  color_2?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  education?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  job?: InputMaybe<StringNullableWithAggregatesFilter>;
  location?: InputMaybe<StringNullableWithAggregatesFilter>;
  showEmail?: InputMaybe<BoolWithAggregatesFilter>;
  skills?: InputMaybe<StringNullableWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  website?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type PreferenceUpdateInput = {
  User?: InputMaybe<UserUpdateOneRequiredWithoutPreferenceInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color_1?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color_2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  job?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  showEmail?: InputMaybe<BoolFieldUpdateOperationsInput>;
  skills?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PreferenceUpdateManyMutationInput = {
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color_1?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color_2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  job?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  showEmail?: InputMaybe<BoolFieldUpdateOperationsInput>;
  skills?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PreferenceUpdateOneWithoutUserInput = {
  connect?: InputMaybe<PreferenceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PreferenceCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PreferenceCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PreferenceUpdateWithoutUserInput>;
  upsert?: InputMaybe<PreferenceUpsertWithoutUserInput>;
};

export type PreferenceUpdateWithoutUserInput = {
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color_1?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color_2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  job?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  showEmail?: InputMaybe<BoolFieldUpdateOperationsInput>;
  skills?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PreferenceUpsertWithoutUserInput = {
  create: PreferenceCreateWithoutUserInput;
  update: PreferenceUpdateWithoutUserInput;
};

export type PreferenceWhereInput = {
  AND?: InputMaybe<Array<PreferenceWhereInput>>;
  NOT?: InputMaybe<Array<PreferenceWhereInput>>;
  OR?: InputMaybe<Array<PreferenceWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  color_1?: InputMaybe<StringNullableFilter>;
  color_2?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  education?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  job?: InputMaybe<StringNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  showEmail?: InputMaybe<BoolFilter>;
  skills?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringNullableFilter>;
};

export type PreferenceWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  account: Maybe<Account>;
  accounts: Array<Account>;
  aggregateAccount: AggregateAccount;
  aggregateCategory: AggregateCategory;
  aggregateComment: AggregateComment;
  aggregatePost: AggregatePost;
  aggregatePreference: AggregatePreference;
  aggregateResetPassword: AggregateResetPassword;
  aggregateSession: AggregateSession;
  aggregateTag: AggregateTag;
  aggregateUser: AggregateUser;
  aggregateVerificationToken: AggregateVerificationToken;
  categories: Array<Category>;
  category: Maybe<Category>;
  comment: Maybe<Comment>;
  comments: Array<Comment>;
  findFirstAccount: Maybe<Account>;
  findFirstCategory: Maybe<Category>;
  findFirstComment: Maybe<Comment>;
  findFirstPost: Maybe<Post>;
  findFirstPreference: Maybe<Preference>;
  findFirstResetPassword: Maybe<ResetPassword>;
  findFirstSession: Maybe<Session>;
  findFirstTag: Maybe<Tag>;
  findFirstUser: Maybe<User>;
  findFirstVerificationToken: Maybe<VerificationToken>;
  groupByAccount: Array<AccountGroupBy>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByComment: Array<CommentGroupBy>;
  groupByPost: Array<PostGroupBy>;
  groupByPreference: Array<PreferenceGroupBy>;
  groupByResetPassword: Array<ResetPasswordGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByTag: Array<TagGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
  post: Maybe<Post>;
  posts: Array<Post>;
  preference: Maybe<Preference>;
  preferences: Array<Preference>;
  resetPassword: Maybe<ResetPassword>;
  resetPasswords: Array<ResetPassword>;
  search: Maybe<Array<Post>>;
  session: Maybe<Session>;
  sessions: Array<Session>;
  tag: Maybe<Tag>;
  tags: Array<Tag>;
  user: Maybe<User>;
  users: Array<User>;
  verificationToken: Maybe<VerificationToken>;
  verificationTokens: Array<VerificationToken>;
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor: InputMaybe<AccountWhereUniqueInput>;
  distinct: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateAccountArgs = {
  cursor: InputMaybe<AccountWhereUniqueInput>;
  orderBy: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateCategoryArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryAggregateCommentArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryAggregatePostArgs = {
  cursor: InputMaybe<PostWhereUniqueInput>;
  orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PostWhereInput>;
};


export type QueryAggregatePreferenceArgs = {
  cursor: InputMaybe<PreferenceWhereUniqueInput>;
  orderBy: InputMaybe<Array<PreferenceOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PreferenceWhereInput>;
};


export type QueryAggregateResetPasswordArgs = {
  cursor: InputMaybe<ResetPasswordWhereUniqueInput>;
  orderBy: InputMaybe<Array<ResetPasswordOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ResetPasswordWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor: InputMaybe<SessionWhereUniqueInput>;
  orderBy: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SessionWhereInput>;
};


export type QueryAggregateTagArgs = {
  cursor: InputMaybe<TagWhereUniqueInput>;
  orderBy: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TagWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryAggregateVerificationTokenArgs = {
  cursor: InputMaybe<VerificationTokenWhereUniqueInput>;
  orderBy: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  distinct: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstAccountArgs = {
  cursor: InputMaybe<AccountWhereUniqueInput>;
  distinct: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstCategoryArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  distinct: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstCommentArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstPostArgs = {
  cursor: InputMaybe<PostWhereUniqueInput>;
  distinct: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PostWhereInput>;
};


export type QueryFindFirstPreferenceArgs = {
  cursor: InputMaybe<PreferenceWhereUniqueInput>;
  distinct: InputMaybe<Array<PreferenceScalarFieldEnum>>;
  orderBy: InputMaybe<Array<PreferenceOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PreferenceWhereInput>;
};


export type QueryFindFirstResetPasswordArgs = {
  cursor: InputMaybe<ResetPasswordWhereUniqueInput>;
  distinct: InputMaybe<Array<ResetPasswordScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ResetPasswordOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ResetPasswordWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor: InputMaybe<SessionWhereUniqueInput>;
  distinct: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstTagArgs = {
  cursor: InputMaybe<TagWhereUniqueInput>;
  distinct: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TagWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstVerificationTokenArgs = {
  cursor: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryGroupByAccountArgs = {
  by: Array<AccountScalarFieldEnum>;
  having: InputMaybe<AccountScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<AccountOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AccountWhereInput>;
};


export type QueryGroupByCategoryArgs = {
  by: Array<CategoryScalarFieldEnum>;
  having: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryGroupByCommentArgs = {
  by: Array<CommentScalarFieldEnum>;
  having: InputMaybe<CommentScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<CommentOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryGroupByPostArgs = {
  by: Array<PostScalarFieldEnum>;
  having: InputMaybe<PostScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<PostOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PostWhereInput>;
};


export type QueryGroupByPreferenceArgs = {
  by: Array<PreferenceScalarFieldEnum>;
  having: InputMaybe<PreferenceScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<PreferenceOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PreferenceWhereInput>;
};


export type QueryGroupByResetPasswordArgs = {
  by: Array<ResetPasswordScalarFieldEnum>;
  having: InputMaybe<ResetPasswordScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<ResetPasswordOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ResetPasswordWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SessionWhereInput>;
};


export type QueryGroupByTagArgs = {
  by: Array<TagScalarFieldEnum>;
  having: InputMaybe<TagScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<TagOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TagWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryGroupByVerificationTokenArgs = {
  by: Array<VerificationTokenScalarFieldEnum>;
  having: InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<VerificationTokenOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor: InputMaybe<PostWhereUniqueInput>;
  distinct: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PostWhereInput>;
};


export type QueryPreferenceArgs = {
  where: PreferenceWhereUniqueInput;
};


export type QueryPreferencesArgs = {
  cursor: InputMaybe<PreferenceWhereUniqueInput>;
  distinct: InputMaybe<Array<PreferenceScalarFieldEnum>>;
  orderBy: InputMaybe<Array<PreferenceOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PreferenceWhereInput>;
};


export type QueryResetPasswordArgs = {
  where: ResetPasswordWhereUniqueInput;
};


export type QueryResetPasswordsArgs = {
  cursor: InputMaybe<ResetPasswordWhereUniqueInput>;
  distinct: InputMaybe<Array<ResetPasswordScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ResetPasswordOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ResetPasswordWhereInput>;
};


export type QuerySearchArgs = {
  data: SearchInput;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor: InputMaybe<SessionWhereUniqueInput>;
  distinct: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SessionWhereInput>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor: InputMaybe<TagWhereUniqueInput>;
  distinct: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TagWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type QueryVerificationTokensArgs = {
  cursor: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<VerificationTokenWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterInput = {
  email: Scalars['String'];
  nickName: Scalars['String'];
  password: Scalars['String'];
};

export type ResetPassword = {
  __typename?: 'ResetPassword';
  id: Scalars['String'];
};

export type ResetPasswordCountAggregate = {
  __typename?: 'ResetPasswordCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  token: Scalars['Int'];
  updated_at: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type ResetPasswordCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ResetPasswordCreateInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ResetPasswordCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ResetPasswordCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ResetPasswordCreateManyUserInputEnvelope = {
  data: Array<ResetPasswordCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ResetPasswordCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ResetPasswordWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResetPasswordCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ResetPasswordCreateWithoutUserInput>>;
  createMany?: InputMaybe<ResetPasswordCreateManyUserInputEnvelope>;
};

export type ResetPasswordCreateOrConnectWithoutUserInput = {
  create: ResetPasswordCreateWithoutUserInput;
  where: ResetPasswordWhereUniqueInput;
};

export type ResetPasswordCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ResetPasswordGroupBy = {
  __typename?: 'ResetPasswordGroupBy';
  _count: Maybe<ResetPasswordCountAggregate>;
  _max: Maybe<ResetPasswordMaxAggregate>;
  _min: Maybe<ResetPasswordMinAggregate>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  token: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type ResetPasswordListRelationFilter = {
  every?: InputMaybe<ResetPasswordWhereInput>;
  none?: InputMaybe<ResetPasswordWhereInput>;
  some?: InputMaybe<ResetPasswordWhereInput>;
};

export type ResetPasswordMaxAggregate = {
  __typename?: 'ResetPasswordMaxAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type ResetPasswordMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ResetPasswordMinAggregate = {
  __typename?: 'ResetPasswordMinAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type ResetPasswordMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ResetPasswordOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ResetPasswordOrderByWithAggregationInput = {
  _count?: InputMaybe<ResetPasswordCountOrderByAggregateInput>;
  _max?: InputMaybe<ResetPasswordMaxOrderByAggregateInput>;
  _min?: InputMaybe<ResetPasswordMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
};

export type ResetPasswordOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
};

export enum ResetPasswordScalarFieldEnum {
  CreatedAt = 'created_at',
  Id = 'id',
  Token = 'token',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type ResetPasswordScalarWhereInput = {
  AND?: InputMaybe<Array<ResetPasswordScalarWhereInput>>;
  NOT?: InputMaybe<Array<ResetPasswordScalarWhereInput>>;
  OR?: InputMaybe<Array<ResetPasswordScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
};

export type ResetPasswordScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ResetPasswordScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ResetPasswordScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ResetPasswordScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
};

export type ResetPasswordUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ResetPasswordUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ResetPasswordUpdateManyWithWhereWithoutUserInput = {
  data: ResetPasswordUpdateManyMutationInput;
  where: ResetPasswordScalarWhereInput;
};

export type ResetPasswordUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ResetPasswordWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResetPasswordCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ResetPasswordCreateWithoutUserInput>>;
  createMany?: InputMaybe<ResetPasswordCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ResetPasswordWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ResetPasswordScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ResetPasswordWhereUniqueInput>>;
  set?: InputMaybe<Array<ResetPasswordWhereUniqueInput>>;
  update?: InputMaybe<Array<ResetPasswordUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ResetPasswordUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ResetPasswordUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ResetPasswordUpdateWithWhereUniqueWithoutUserInput = {
  data: ResetPasswordUpdateWithoutUserInput;
  where: ResetPasswordWhereUniqueInput;
};

export type ResetPasswordUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ResetPasswordUpsertWithWhereUniqueWithoutUserInput = {
  create: ResetPasswordCreateWithoutUserInput;
  update: ResetPasswordUpdateWithoutUserInput;
  where: ResetPasswordWhereUniqueInput;
};

export type ResetPasswordWhereInput = {
  AND?: InputMaybe<Array<ResetPasswordWhereInput>>;
  NOT?: InputMaybe<Array<ResetPasswordWhereInput>>;
  OR?: InputMaybe<Array<ResetPasswordWhereInput>>;
  id?: InputMaybe<StringFilter>;
};

export type ResetPasswordWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum Role {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export type SearchInput = {
  searchValue: Scalars['String'];
};

export type Session = {
  __typename?: 'Session';
  expires: Scalars['DateTime'];
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int'];
  expires: Scalars['Int'];
  id: Scalars['Int'];
  sessionToken: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SessionCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  user: UserCreateNestedOneWithoutSessionInput;
};

export type SessionCreateManyInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
};

export type SessionCreateManyUserInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _count: Maybe<SessionCountAggregate>;
  _max: Maybe<SessionMaxAggregate>;
  _min: Maybe<SessionMinAggregate>;
  expires: Scalars['DateTime'];
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  expires: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  sessionToken: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type SessionMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  expires: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  sessionToken: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type SessionMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithAggregationInput = {
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  Expires = 'expires',
  Id = 'id',
  SessionToken = 'sessionToken',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionInput>;
};

export type SessionUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  Post: Array<Post>;
  _count: Maybe<TagCount>;
  created_at: Scalars['DateTime'];
  description: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type TagPostArgs = {
  cursor: InputMaybe<PostWhereUniqueInput>;
  distinct: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PostWhereInput>;
};

export type TagCount = {
  __typename?: 'TagCount';
  Post: Scalars['Int'];
};

export type TagCountAggregate = {
  __typename?: 'TagCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type TagCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type TagCreateInput = {
  Post?: InputMaybe<PostCreateNestedManyWithoutTagsInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type TagCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type TagCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<TagCreateWithoutPostInput>>;
};

export type TagCreateOrConnectWithoutPostInput = {
  create: TagCreateWithoutPostInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutPostInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  _count: Maybe<TagCountAggregate>;
  _max: Maybe<TagMaxAggregate>;
  _min: Maybe<TagMinAggregate>;
  created_at: Scalars['DateTime'];
  description: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagMaxAggregate = {
  __typename?: 'TagMaxAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type TagMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type TagMinAggregate = {
  __typename?: 'TagMinAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type TagMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TagOrderByWithAggregationInput = {
  _count?: InputMaybe<TagCountOrderByAggregateInput>;
  _max?: InputMaybe<TagMaxOrderByAggregateInput>;
  _min?: InputMaybe<TagMinOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
  Post?: InputMaybe<PostOrderByRelationAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<TagScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereInput>>;
  OR?: InputMaybe<Array<TagScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type TagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TagUpdateInput = {
  Post?: InputMaybe<PostUpdateManyWithoutTagsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutPostInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutPostInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<TagCreateWithoutPostInput>>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutPostInput>>;
};

export type TagUpdateWithWhereUniqueWithoutPostInput = {
  data: TagUpdateWithoutPostInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutPostInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutPostInput = {
  create: TagCreateWithoutPostInput;
  update: TagUpdateWithoutPostInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  Post?: InputMaybe<PostListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  Account: Array<Account>;
  Comment: Array<Comment>;
  Post: Array<Post>;
  Post_likes: Array<Post>;
  Preference: Maybe<Preference>;
  ResetPassword: Array<ResetPassword>;
  Session: Array<Session>;
  User_A: Array<User>;
  User_B: Array<User>;
  _count: Maybe<UserCount>;
  avatar: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  follower_id: Maybe<Scalars['String']>;
  followersCount: Maybe<Follow>;
  id: Scalars['String'];
  image: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  last_name: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nickname: Maybe<Scalars['String']>;
  role: Role;
  updated_at: Scalars['DateTime'];
};


export type UserAccountArgs = {
  cursor: InputMaybe<AccountWhereUniqueInput>;
  distinct: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AccountWhereInput>;
};


export type UserCommentArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type UserPostArgs = {
  cursor: InputMaybe<PostWhereUniqueInput>;
  distinct: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PostWhereInput>;
};


export type UserPost_LikesArgs = {
  cursor: InputMaybe<PostWhereUniqueInput>;
  distinct: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PostWhereInput>;
};


export type UserResetPasswordArgs = {
  cursor: InputMaybe<ResetPasswordWhereUniqueInput>;
  distinct: InputMaybe<Array<ResetPasswordScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ResetPasswordOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ResetPasswordWhereInput>;
};


export type UserSessionArgs = {
  cursor: InputMaybe<SessionWhereUniqueInput>;
  distinct: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SessionWhereInput>;
};


export type UserUser_AArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type UserUser_BArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Account: Scalars['Int'];
  Comment: Scalars['Int'];
  Post: Scalars['Int'];
  Post_likes: Scalars['Int'];
  ResetPassword: Scalars['Int'];
  Session: Scalars['Int'];
  User_A: Scalars['Int'];
  User_B: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  avatar: Scalars['Int'];
  created_at: Scalars['Int'];
  email: Scalars['Int'];
  emailVerified: Scalars['Int'];
  first_name: Scalars['Int'];
  follower_id: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  is_disabled: Scalars['Int'];
  last_name: Scalars['Int'];
  name: Scalars['Int'];
  nickname: Scalars['Int'];
  password: Scalars['Int'];
  role: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  follower_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  Account?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostCreateNestedManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceCreateNestedOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
  Session?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  User_A?: InputMaybe<UserCreateNestedManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserCreateNestedManyWithoutUser_AInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follower_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follower_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedManyWithoutPost_LikesInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPost_LikesInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPost_LikesInput>>;
};

export type UserCreateNestedManyWithoutUser_AInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUser_AInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUser_AInput>>;
};

export type UserCreateNestedManyWithoutUser_BInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUser_BInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUser_BInput>>;
};

export type UserCreateNestedOneWithoutAccountInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountInput>;
  create?: InputMaybe<UserCreateWithoutAccountInput>;
};

export type UserCreateNestedOneWithoutCommentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentInput>;
  create?: InputMaybe<UserCreateWithoutCommentInput>;
};

export type UserCreateNestedOneWithoutPostInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostInput>;
  create?: InputMaybe<UserCreateWithoutPostInput>;
};

export type UserCreateNestedOneWithoutPreferenceInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPreferenceInput>;
  create?: InputMaybe<UserCreateWithoutPreferenceInput>;
};

export type UserCreateNestedOneWithoutSessionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionInput>;
  create?: InputMaybe<UserCreateWithoutSessionInput>;
};

export type UserCreateOrConnectWithoutAccountInput = {
  create: UserCreateWithoutAccountInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommentInput = {
  create: UserCreateWithoutCommentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostInput = {
  create: UserCreateWithoutPostInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPost_LikesInput = {
  create: UserCreateWithoutPost_LikesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPreferenceInput = {
  create: UserCreateWithoutPreferenceInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionInput = {
  create: UserCreateWithoutSessionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUser_AInput = {
  create: UserCreateWithoutUser_AInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUser_BInput = {
  create: UserCreateWithoutUser_BInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountInput = {
  Comment?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostCreateNestedManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceCreateNestedOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
  Session?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  User_A?: InputMaybe<UserCreateNestedManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserCreateNestedManyWithoutUser_AInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follower_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutCommentInput = {
  Account?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostCreateNestedManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceCreateNestedOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
  Session?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  User_A?: InputMaybe<UserCreateNestedManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserCreateNestedManyWithoutUser_AInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follower_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutPostInput = {
  Account?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostCreateNestedManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceCreateNestedOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
  Session?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  User_A?: InputMaybe<UserCreateNestedManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserCreateNestedManyWithoutUser_AInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follower_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutPost_LikesInput = {
  Account?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Preference?: InputMaybe<PreferenceCreateNestedOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
  Session?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  User_A?: InputMaybe<UserCreateNestedManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserCreateNestedManyWithoutUser_AInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follower_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutPreferenceInput = {
  Account?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostCreateNestedManyWithoutUser_LikesInput>;
  ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
  Session?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  User_A?: InputMaybe<UserCreateNestedManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserCreateNestedManyWithoutUser_AInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follower_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutSessionInput = {
  Account?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostCreateNestedManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceCreateNestedOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
  User_A?: InputMaybe<UserCreateNestedManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserCreateNestedManyWithoutUser_AInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follower_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutUser_AInput = {
  Account?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostCreateNestedManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceCreateNestedOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
  Session?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  User_B?: InputMaybe<UserCreateNestedManyWithoutUser_AInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follower_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutUser_BInput = {
  Account?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostCreateNestedManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceCreateNestedOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
  Session?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  User_A?: InputMaybe<UserCreateNestedManyWithoutUser_BInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follower_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count: Maybe<UserCountAggregate>;
  _max: Maybe<UserMaxAggregate>;
  _min: Maybe<UserMinAggregate>;
  avatar: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  follower_id: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  last_name: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nickname: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  role: Role;
  updated_at: Scalars['DateTime'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatar: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  email: Maybe<Scalars['String']>;
  emailVerified: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  follower_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  last_name: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  role: Maybe<Role>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  follower_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatar: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  email: Maybe<Scalars['String']>;
  emailVerified: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  follower_id: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  last_name: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  role: Maybe<Role>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  follower_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  follower_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  Account?: InputMaybe<AccountOrderByRelationAggregateInput>;
  Comment?: InputMaybe<CommentOrderByRelationAggregateInput>;
  Post?: InputMaybe<PostOrderByRelationAggregateInput>;
  Post_likes?: InputMaybe<PostOrderByRelationAggregateInput>;
  Preference?: InputMaybe<PreferenceOrderByWithRelationInput>;
  ResetPassword?: InputMaybe<ResetPasswordOrderByRelationAggregateInput>;
  Session?: InputMaybe<SessionOrderByRelationAggregateInput>;
  User_A?: InputMaybe<UserOrderByRelationAggregateInput>;
  User_B?: InputMaybe<UserOrderByRelationAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  follower_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Avatar = 'avatar',
  CreatedAt = 'created_at',
  Email = 'email',
  EmailVerified = 'emailVerified',
  FirstName = 'first_name',
  FollowerId = 'follower_id',
  Id = 'id',
  Image = 'image',
  IsDisabled = 'is_disabled',
  LastName = 'last_name',
  Name = 'name',
  Nickname = 'nickname',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updated_at'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringNullableFilter>;
  follower_id?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  last_name?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  avatar?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emailVerified?: InputMaybe<StringNullableWithAggregatesFilter>;
  first_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  follower_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  last_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  nickname?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  Account?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
  Post?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostUpdateManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceUpdateOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
  Session?: InputMaybe<SessionUpdateManyWithoutUserInput>;
  User_A?: InputMaybe<UserUpdateManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserUpdateManyWithoutUser_AInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  follower_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  follower_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutPost_LikesInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutUser_AInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutUser_BInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutPost_LikesInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPost_LikesInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPost_LikesInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutPost_LikesInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutPost_LikesInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutPost_LikesInput>>;
};

export type UserUpdateManyWithoutUser_AInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUser_AInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUser_AInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutUser_AInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutUser_AInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutUser_AInput>>;
};

export type UserUpdateManyWithoutUser_BInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUser_BInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUser_BInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutUser_BInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutUser_BInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutUser_BInput>>;
};

export type UserUpdateOneRequiredWithoutAccountInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountInput>;
  create?: InputMaybe<UserCreateWithoutAccountInput>;
  update?: InputMaybe<UserUpdateWithoutAccountInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountInput>;
};

export type UserUpdateOneRequiredWithoutCommentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentInput>;
  create?: InputMaybe<UserCreateWithoutCommentInput>;
  update?: InputMaybe<UserUpdateWithoutCommentInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentInput>;
};

export type UserUpdateOneRequiredWithoutPostInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostInput>;
  create?: InputMaybe<UserCreateWithoutPostInput>;
  update?: InputMaybe<UserUpdateWithoutPostInput>;
  upsert?: InputMaybe<UserUpsertWithoutPostInput>;
};

export type UserUpdateOneRequiredWithoutPreferenceInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPreferenceInput>;
  create?: InputMaybe<UserCreateWithoutPreferenceInput>;
  update?: InputMaybe<UserUpdateWithoutPreferenceInput>;
  upsert?: InputMaybe<UserUpsertWithoutPreferenceInput>;
};

export type UserUpdateOneRequiredWithoutSessionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionInput>;
  create?: InputMaybe<UserCreateWithoutSessionInput>;
  update?: InputMaybe<UserUpdateWithoutSessionInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionInput>;
};

export type UserUpdateWithWhereUniqueWithoutPost_LikesInput = {
  data: UserUpdateWithoutPost_LikesInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutUser_AInput = {
  data: UserUpdateWithoutUser_AInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutUser_BInput = {
  data: UserUpdateWithoutUser_BInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutAccountInput = {
  Comment?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
  Post?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostUpdateManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceUpdateOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
  Session?: InputMaybe<SessionUpdateManyWithoutUserInput>;
  User_A?: InputMaybe<UserUpdateManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserUpdateManyWithoutUser_AInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  follower_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommentInput = {
  Account?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  Post?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostUpdateManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceUpdateOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
  Session?: InputMaybe<SessionUpdateManyWithoutUserInput>;
  User_A?: InputMaybe<UserUpdateManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserUpdateManyWithoutUser_AInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  follower_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPostInput = {
  Account?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostUpdateManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceUpdateOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
  Session?: InputMaybe<SessionUpdateManyWithoutUserInput>;
  User_A?: InputMaybe<UserUpdateManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserUpdateManyWithoutUser_AInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  follower_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPost_LikesInput = {
  Account?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
  Post?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
  Preference?: InputMaybe<PreferenceUpdateOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
  Session?: InputMaybe<SessionUpdateManyWithoutUserInput>;
  User_A?: InputMaybe<UserUpdateManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserUpdateManyWithoutUser_AInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  follower_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPreferenceInput = {
  Account?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
  Post?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostUpdateManyWithoutUser_LikesInput>;
  ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
  Session?: InputMaybe<SessionUpdateManyWithoutUserInput>;
  User_A?: InputMaybe<UserUpdateManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserUpdateManyWithoutUser_AInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  follower_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSessionInput = {
  Account?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
  Post?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostUpdateManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceUpdateOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
  User_A?: InputMaybe<UserUpdateManyWithoutUser_BInput>;
  User_B?: InputMaybe<UserUpdateManyWithoutUser_AInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  follower_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUser_AInput = {
  Account?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
  Post?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostUpdateManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceUpdateOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
  Session?: InputMaybe<SessionUpdateManyWithoutUserInput>;
  User_B?: InputMaybe<UserUpdateManyWithoutUser_AInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  follower_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUser_BInput = {
  Account?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
  Post?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
  Post_likes?: InputMaybe<PostUpdateManyWithoutUser_LikesInput>;
  Preference?: InputMaybe<PreferenceUpdateOneWithoutUserInput>;
  ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
  Session?: InputMaybe<SessionUpdateManyWithoutUserInput>;
  User_A?: InputMaybe<UserUpdateManyWithoutUser_BInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  follower_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nickname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutPost_LikesInput = {
  create: UserCreateWithoutPost_LikesInput;
  update: UserUpdateWithoutPost_LikesInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutUser_AInput = {
  create: UserCreateWithoutUser_AInput;
  update: UserUpdateWithoutUser_AInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutUser_BInput = {
  create: UserCreateWithoutUser_BInput;
  update: UserUpdateWithoutUser_BInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutAccountInput = {
  create: UserCreateWithoutAccountInput;
  update: UserUpdateWithoutAccountInput;
};

export type UserUpsertWithoutCommentInput = {
  create: UserCreateWithoutCommentInput;
  update: UserUpdateWithoutCommentInput;
};

export type UserUpsertWithoutPostInput = {
  create: UserCreateWithoutPostInput;
  update: UserUpdateWithoutPostInput;
};

export type UserUpsertWithoutPreferenceInput = {
  create: UserCreateWithoutPreferenceInput;
  update: UserUpdateWithoutPreferenceInput;
};

export type UserUpsertWithoutSessionInput = {
  create: UserCreateWithoutSessionInput;
  update: UserUpdateWithoutSessionInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Account?: InputMaybe<AccountListRelationFilter>;
  Comment?: InputMaybe<CommentListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Post?: InputMaybe<PostListRelationFilter>;
  Post_likes?: InputMaybe<PostListRelationFilter>;
  Preference?: InputMaybe<PreferenceRelationFilter>;
  ResetPassword?: InputMaybe<ResetPasswordListRelationFilter>;
  Session?: InputMaybe<SessionListRelationFilter>;
  User_A?: InputMaybe<UserListRelationFilter>;
  User_B?: InputMaybe<UserListRelationFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringNullableFilter>;
  follower_id?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  last_name?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int'];
  expires: Scalars['Int'];
  identifier: Scalars['Int'];
  token: Scalars['Int'];
};

export type VerificationTokenCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenCreateInput = {
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenCreateManyInput = {
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenGroupBy = {
  __typename?: 'VerificationTokenGroupBy';
  _count: Maybe<VerificationTokenCountAggregate>;
  _max: Maybe<VerificationTokenMaxAggregate>;
  _min: Maybe<VerificationTokenMinAggregate>;
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  expires: Maybe<Scalars['DateTime']>;
  identifier: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  expires: Maybe<Scalars['DateTime']>;
  identifier: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithRelationInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenScalarFieldEnum {
  Expires = 'expires',
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type VerificationTokenUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type VerificationTokenWhereUniqueInput = {
  identifier_token?: InputMaybe<VerificationTokenIdentifierTokenCompoundUniqueInput>;
  token?: InputMaybe<Scalars['String']>;
};

export type UserFragment = { __typename?: 'User', id: string, nickname: string, email: string, avatar: string, role: Role, created_at: any };

export type CreateCommentMutationVariables = Exact<{
  data: CommentCreateInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string, content: string, created_at: any, picture: string, author: { __typename?: 'User', id: string, nickname: string } } };

export type CreatePostMutationVariables = Exact<{
  data: PostCreateInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, slug: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: string };

export type MutateLoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type MutateLoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, nickname: string, email: string, avatar: string, role: Role, created_at: any } };

export type MutateMeMutationVariables = Exact<{ [key: string]: never; }>;


export type MutateMeMutation = { __typename?: 'Mutation', me: { __typename?: 'User', id: string, nickname: string, email: string, avatar: string, role: Role, created_at: any } };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string, nickname: string, email: string, avatar: string, role: Role, created_at: any } };

export type SetFollowerMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type SetFollowerMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, nickname: string, email: string, avatar: string, role: Role, created_at: any } };

export type SetLikeMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
}>;


export type SetLikeMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string } };

export type UpdatePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string, slug: string } };

export type UpdateUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, nickname: string } };

export type UpdateUserPreferencesMutationVariables = Exact<{
  where: PreferenceWhereUniqueInput;
  data: PreferenceUpdateInput;
}>;


export type UpdateUserPreferencesMutation = { __typename?: 'Mutation', updatePreference: { __typename?: 'Preference', id: string, showEmail: boolean, website: string, location: string, skills: string, job: string, education: string, bio: string, color_1: string, color_2: string } };

export type DeleteCommentMutationVariables = Exact<{
  where: CommentWhereUniqueInput;
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: { __typename?: 'Comment', id: string } };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string }> };

export type GetAllFollowersQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetAllFollowersQuery = { __typename?: 'Query', user: { __typename?: 'User', followersCount: { __typename?: 'Follow', count: number, isFollowing: boolean } } };

export type GetAllLikesQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type GetAllLikesQuery = { __typename?: 'Query', post: { __typename?: 'Post', User_likes: Array<{ __typename?: 'User', id: string }> } };

export type GetAllPostCommentsQueryVariables = Exact<{
  where: InputMaybe<CommentWhereInput>;
}>;


export type GetAllPostCommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: string, content: string, created_at: any, picture: string, author: { __typename?: 'User', id: string, nickname: string, avatar: string } }> };

export type GetAllPostLikesQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type GetAllPostLikesQuery = { __typename?: 'Query', post: { __typename?: 'Post', User_likes: Array<{ __typename?: 'User', id: string }> } };

export type GetAllPostsQueryVariables = Exact<{
  where: PostWhereInput;
  orderBy: InputMaybe<Array<PostOrderByWithRelationInput> | PostOrderByWithRelationInput>;
  take: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
}>;


export type GetAllPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string, content: string, isDraft: boolean, is_disabled: boolean, cover_picture: string, slug: string, created_at: any, userId: string, categoryId: string, commentCount: { __typename?: 'Count', count: number }, likeCount: { __typename?: 'Count', count: number }, author: { __typename?: 'User', id: string, first_name: string, image: string, nickname: string, last_name: string, email: string, avatar: string }, Category: { __typename?: 'Category', id: string, name: string }, Tags: Array<{ __typename?: 'Tag', id: string, name: string }> }> };

export type GetAllPostByInputQueryVariables = Exact<{
  where: InputMaybe<PostWhereInput>;
  orderBy: InputMaybe<Array<PostOrderByWithRelationInput> | PostOrderByWithRelationInput>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
}>;


export type GetAllPostByInputQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string, content: string, isDraft: boolean, cover_picture: string, slug: string, created_at: any, is_disabled: boolean, userId: string, categoryId: string, commentCount: { __typename?: 'Count', count: number }, likeCount: { __typename?: 'Count', count: number }, author: { __typename?: 'User', id: string, first_name: string, image: string, nickname: string, last_name: string, email: string, avatar: string }, Category: { __typename?: 'Category', id: string, name: string }, Tags: Array<{ __typename?: 'Tag', id: string, name: string }> }> };

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', id: string, name: string }> };

export type GetAllUserLikesQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetAllUserLikesQuery = { __typename?: 'Query', user: { __typename?: 'User', Post_likes: Array<{ __typename?: 'Post', id: string }> } };

export type GetPostDataQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type GetPostDataQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, slug: string, title: string, content: string, cover_picture: string, isDraft: boolean, Category: { __typename?: 'Category', id: string, name: string }, User_likes: Array<{ __typename?: 'User', id: string }>, author: { __typename?: 'User', nickname: string, id: string, first_name: string, last_name: string, image: string, email: string, avatar: string }, Tags: Array<{ __typename?: 'Tag', id: string, name: string }> } };

export type GetUserDataQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserDataQuery = { __typename?: 'Query', user: { __typename?: 'User', first_name: string, last_name: string, created_at: any, id: string, nickname: string, email: string, avatar: string, role: Role } };

export type GetUserAdditionalInformationsQueryVariables = Exact<{
  where: PreferenceWhereUniqueInput;
}>;


export type GetUserAdditionalInformationsQuery = { __typename?: 'Query', preference: { __typename?: 'Preference', website: string, location: string, bio: string } };

export type SearchQueryVariables = Exact<{
  search: SearchInput;
}>;


export type SearchQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Post', title: string, slug: string, id: string, cover_picture: string, Tags: Array<{ __typename?: 'Tag', name: string, id: string }> }> };

export const UserFragmentDoc = gql`
    fragment User on User {
  id
  nickname
  email
  avatar
  role
  created_at
}
    `;
export const CreateCommentDocument = gql`
    mutation CreateComment($data: CommentCreateInput!) {
  createComment(data: $data) {
    id
    content
    created_at
    picture
    author {
      id
      nickname
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($data: PostCreateInput!) {
  createPost(data: $data) {
    id
    slug
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MutateLoginDocument = gql`
    mutation MutateLogin($data: LoginInput!) {
  login(data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type MutateLoginMutationFn = Apollo.MutationFunction<MutateLoginMutation, MutateLoginMutationVariables>;

/**
 * __useMutateLoginMutation__
 *
 * To run a mutation, you first call `useMutateLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutateLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutateLoginMutation, { data, loading, error }] = useMutateLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useMutateLoginMutation(baseOptions?: Apollo.MutationHookOptions<MutateLoginMutation, MutateLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutateLoginMutation, MutateLoginMutationVariables>(MutateLoginDocument, options);
      }
export type MutateLoginMutationHookResult = ReturnType<typeof useMutateLoginMutation>;
export type MutateLoginMutationResult = Apollo.MutationResult<MutateLoginMutation>;
export type MutateLoginMutationOptions = Apollo.BaseMutationOptions<MutateLoginMutation, MutateLoginMutationVariables>;
export const MutateMeDocument = gql`
    mutation MutateMe {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type MutateMeMutationFn = Apollo.MutationFunction<MutateMeMutation, MutateMeMutationVariables>;

/**
 * __useMutateMeMutation__
 *
 * To run a mutation, you first call `useMutateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutateMeMutation, { data, loading, error }] = useMutateMeMutation({
 *   variables: {
 *   },
 * });
 */
export function useMutateMeMutation(baseOptions?: Apollo.MutationHookOptions<MutateMeMutation, MutateMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutateMeMutation, MutateMeMutationVariables>(MutateMeDocument, options);
      }
export type MutateMeMutationHookResult = ReturnType<typeof useMutateMeMutation>;
export type MutateMeMutationResult = Apollo.MutationResult<MutateMeMutation>;
export type MutateMeMutationOptions = Apollo.BaseMutationOptions<MutateMeMutation, MutateMeMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SetFollowerDocument = gql`
    mutation SetFollower($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateUser(where: $where, data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type SetFollowerMutationFn = Apollo.MutationFunction<SetFollowerMutation, SetFollowerMutationVariables>;

/**
 * __useSetFollowerMutation__
 *
 * To run a mutation, you first call `useSetFollowerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetFollowerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setFollowerMutation, { data, loading, error }] = useSetFollowerMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSetFollowerMutation(baseOptions?: Apollo.MutationHookOptions<SetFollowerMutation, SetFollowerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetFollowerMutation, SetFollowerMutationVariables>(SetFollowerDocument, options);
      }
export type SetFollowerMutationHookResult = ReturnType<typeof useSetFollowerMutation>;
export type SetFollowerMutationResult = Apollo.MutationResult<SetFollowerMutation>;
export type SetFollowerMutationOptions = Apollo.BaseMutationOptions<SetFollowerMutation, SetFollowerMutationVariables>;
export const SetLikeDocument = gql`
    mutation SetLike($where: PostWhereUniqueInput!, $data: PostUpdateInput!) {
  updatePost(where: $where, data: $data) {
    id
  }
}
    `;
export type SetLikeMutationFn = Apollo.MutationFunction<SetLikeMutation, SetLikeMutationVariables>;

/**
 * __useSetLikeMutation__
 *
 * To run a mutation, you first call `useSetLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setLikeMutation, { data, loading, error }] = useSetLikeMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSetLikeMutation(baseOptions?: Apollo.MutationHookOptions<SetLikeMutation, SetLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetLikeMutation, SetLikeMutationVariables>(SetLikeDocument, options);
      }
export type SetLikeMutationHookResult = ReturnType<typeof useSetLikeMutation>;
export type SetLikeMutationResult = Apollo.MutationResult<SetLikeMutation>;
export type SetLikeMutationOptions = Apollo.BaseMutationOptions<SetLikeMutation, SetLikeMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($where: PostWhereUniqueInput!, $data: PostUpdateInput!) {
  updatePost(where: $where, data: $data) {
    id
    slug
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateUser(where: $where, data: $data) {
    id
    first_name
    last_name
    email
    nickname
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserPreferencesDocument = gql`
    mutation UpdateUserPreferences($where: PreferenceWhereUniqueInput!, $data: PreferenceUpdateInput!) {
  updatePreference(where: $where, data: $data) {
    id
    showEmail
    website
    location
    skills
    job
    education
    bio
    color_1
    color_2
  }
}
    `;
export type UpdateUserPreferencesMutationFn = Apollo.MutationFunction<UpdateUserPreferencesMutation, UpdateUserPreferencesMutationVariables>;

/**
 * __useUpdateUserPreferencesMutation__
 *
 * To run a mutation, you first call `useUpdateUserPreferencesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPreferencesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPreferencesMutation, { data, loading, error }] = useUpdateUserPreferencesMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserPreferencesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserPreferencesMutation, UpdateUserPreferencesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserPreferencesMutation, UpdateUserPreferencesMutationVariables>(UpdateUserPreferencesDocument, options);
      }
export type UpdateUserPreferencesMutationHookResult = ReturnType<typeof useUpdateUserPreferencesMutation>;
export type UpdateUserPreferencesMutationResult = Apollo.MutationResult<UpdateUserPreferencesMutation>;
export type UpdateUserPreferencesMutationOptions = Apollo.BaseMutationOptions<UpdateUserPreferencesMutation, UpdateUserPreferencesMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation DeleteComment($where: CommentWhereUniqueInput!) {
  deleteComment(where: $where) {
    id
  }
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const GetAllCategoriesDocument = gql`
    query GetAllCategories {
  categories {
    id
    name
  }
}
    `;

/**
 * __useGetAllCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
      }
export function useGetAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
        }
export type GetAllCategoriesQueryHookResult = ReturnType<typeof useGetAllCategoriesQuery>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesLazyQuery>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetAllFollowersDocument = gql`
    query GetAllFollowers($where: UserWhereUniqueInput!) {
  user(where: $where) {
    followersCount {
      count
      isFollowing
    }
  }
}
    `;

/**
 * __useGetAllFollowersQuery__
 *
 * To run a query within a React component, call `useGetAllFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFollowersQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllFollowersQuery(baseOptions: Apollo.QueryHookOptions<GetAllFollowersQuery, GetAllFollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFollowersQuery, GetAllFollowersQueryVariables>(GetAllFollowersDocument, options);
      }
export function useGetAllFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFollowersQuery, GetAllFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFollowersQuery, GetAllFollowersQueryVariables>(GetAllFollowersDocument, options);
        }
export type GetAllFollowersQueryHookResult = ReturnType<typeof useGetAllFollowersQuery>;
export type GetAllFollowersLazyQueryHookResult = ReturnType<typeof useGetAllFollowersLazyQuery>;
export type GetAllFollowersQueryResult = Apollo.QueryResult<GetAllFollowersQuery, GetAllFollowersQueryVariables>;
export const GetAllLikesDocument = gql`
    query GetAllLikes($where: PostWhereUniqueInput!) {
  post(where: $where) {
    User_likes {
      id
    }
  }
}
    `;

/**
 * __useGetAllLikesQuery__
 *
 * To run a query within a React component, call `useGetAllLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLikesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllLikesQuery(baseOptions: Apollo.QueryHookOptions<GetAllLikesQuery, GetAllLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllLikesQuery, GetAllLikesQueryVariables>(GetAllLikesDocument, options);
      }
export function useGetAllLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLikesQuery, GetAllLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllLikesQuery, GetAllLikesQueryVariables>(GetAllLikesDocument, options);
        }
export type GetAllLikesQueryHookResult = ReturnType<typeof useGetAllLikesQuery>;
export type GetAllLikesLazyQueryHookResult = ReturnType<typeof useGetAllLikesLazyQuery>;
export type GetAllLikesQueryResult = Apollo.QueryResult<GetAllLikesQuery, GetAllLikesQueryVariables>;
export const GetAllPostCommentsDocument = gql`
    query getAllPostComments($where: CommentWhereInput) {
  comments(where: $where) {
    id
    content
    created_at
    picture
    author {
      id
      nickname
      avatar
    }
  }
}
    `;

/**
 * __useGetAllPostCommentsQuery__
 *
 * To run a query within a React component, call `useGetAllPostCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostCommentsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllPostCommentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostCommentsQuery, GetAllPostCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostCommentsQuery, GetAllPostCommentsQueryVariables>(GetAllPostCommentsDocument, options);
      }
export function useGetAllPostCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostCommentsQuery, GetAllPostCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostCommentsQuery, GetAllPostCommentsQueryVariables>(GetAllPostCommentsDocument, options);
        }
export type GetAllPostCommentsQueryHookResult = ReturnType<typeof useGetAllPostCommentsQuery>;
export type GetAllPostCommentsLazyQueryHookResult = ReturnType<typeof useGetAllPostCommentsLazyQuery>;
export type GetAllPostCommentsQueryResult = Apollo.QueryResult<GetAllPostCommentsQuery, GetAllPostCommentsQueryVariables>;
export const GetAllPostLikesDocument = gql`
    query GetAllPostLikes($where: PostWhereUniqueInput!) {
  post(where: $where) {
    User_likes {
      id
    }
  }
}
    `;

/**
 * __useGetAllPostLikesQuery__
 *
 * To run a query within a React component, call `useGetAllPostLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostLikesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllPostLikesQuery(baseOptions: Apollo.QueryHookOptions<GetAllPostLikesQuery, GetAllPostLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostLikesQuery, GetAllPostLikesQueryVariables>(GetAllPostLikesDocument, options);
      }
export function useGetAllPostLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostLikesQuery, GetAllPostLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostLikesQuery, GetAllPostLikesQueryVariables>(GetAllPostLikesDocument, options);
        }
export type GetAllPostLikesQueryHookResult = ReturnType<typeof useGetAllPostLikesQuery>;
export type GetAllPostLikesLazyQueryHookResult = ReturnType<typeof useGetAllPostLikesLazyQuery>;
export type GetAllPostLikesQueryResult = Apollo.QueryResult<GetAllPostLikesQuery, GetAllPostLikesQueryVariables>;
export const GetAllPostsDocument = gql`
    query GetAllPosts($where: PostWhereInput!, $orderBy: [PostOrderByWithRelationInput!], $take: Int, $skip: Int) {
  posts(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
    title
    content
    isDraft
    is_disabled
    cover_picture
    slug
    created_at
    commentCount {
      count
    }
    likeCount {
      count
    }
    author {
      id
      first_name
      image
      nickname
      last_name
      email
      avatar
    }
    userId
    Category {
      id
      name
    }
    categoryId
    Tags {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetAllPostsQuery(baseOptions: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
      }
export function useGetAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetAllPostByInputDocument = gql`
    query GetAllPostByInput($where: PostWhereInput, $orderBy: [PostOrderByWithRelationInput!], $skip: Int, $take: Int) {
  posts(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
    title
    content
    isDraft
    cover_picture
    slug
    created_at
    is_disabled
    commentCount {
      count
    }
    likeCount {
      count
    }
    author {
      id
      first_name
      image
      nickname
      last_name
      email
      avatar
    }
    userId
    Category {
      id
      name
    }
    categoryId
    Tags {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAllPostByInputQuery__
 *
 * To run a query within a React component, call `useGetAllPostByInputQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostByInputQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostByInputQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetAllPostByInputQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostByInputQuery, GetAllPostByInputQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostByInputQuery, GetAllPostByInputQueryVariables>(GetAllPostByInputDocument, options);
      }
export function useGetAllPostByInputLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostByInputQuery, GetAllPostByInputQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostByInputQuery, GetAllPostByInputQueryVariables>(GetAllPostByInputDocument, options);
        }
export type GetAllPostByInputQueryHookResult = ReturnType<typeof useGetAllPostByInputQuery>;
export type GetAllPostByInputLazyQueryHookResult = ReturnType<typeof useGetAllPostByInputLazyQuery>;
export type GetAllPostByInputQueryResult = Apollo.QueryResult<GetAllPostByInputQuery, GetAllPostByInputQueryVariables>;
export const GetAllTagsDocument = gql`
    query getAllTags {
  tags {
    id
    name
  }
}
    `;

/**
 * __useGetAllTagsQuery__
 *
 * To run a query within a React component, call `useGetAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
      }
export function useGetAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
        }
export type GetAllTagsQueryHookResult = ReturnType<typeof useGetAllTagsQuery>;
export type GetAllTagsLazyQueryHookResult = ReturnType<typeof useGetAllTagsLazyQuery>;
export type GetAllTagsQueryResult = Apollo.QueryResult<GetAllTagsQuery, GetAllTagsQueryVariables>;
export const GetAllUserLikesDocument = gql`
    query GetAllUserLikes($where: UserWhereUniqueInput!) {
  user(where: $where) {
    Post_likes {
      id
    }
  }
}
    `;

/**
 * __useGetAllUserLikesQuery__
 *
 * To run a query within a React component, call `useGetAllUserLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserLikesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllUserLikesQuery(baseOptions: Apollo.QueryHookOptions<GetAllUserLikesQuery, GetAllUserLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserLikesQuery, GetAllUserLikesQueryVariables>(GetAllUserLikesDocument, options);
      }
export function useGetAllUserLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserLikesQuery, GetAllUserLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserLikesQuery, GetAllUserLikesQueryVariables>(GetAllUserLikesDocument, options);
        }
export type GetAllUserLikesQueryHookResult = ReturnType<typeof useGetAllUserLikesQuery>;
export type GetAllUserLikesLazyQueryHookResult = ReturnType<typeof useGetAllUserLikesLazyQuery>;
export type GetAllUserLikesQueryResult = Apollo.QueryResult<GetAllUserLikesQuery, GetAllUserLikesQueryVariables>;
export const GetPostDataDocument = gql`
    query GetPostData($where: PostWhereUniqueInput!) {
  post(where: $where) {
    id
    slug
    title
    content
    cover_picture
    Category {
      id
      name
    }
    isDraft
    User_likes {
      id
    }
    author {
      nickname
      id
      first_name
      last_name
      image
      email
      avatar
    }
    Tags {
      id
      name
    }
  }
}
    `;

/**
 * __useGetPostDataQuery__
 *
 * To run a query within a React component, call `useGetPostDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostDataQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetPostDataQuery(baseOptions: Apollo.QueryHookOptions<GetPostDataQuery, GetPostDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostDataQuery, GetPostDataQueryVariables>(GetPostDataDocument, options);
      }
export function useGetPostDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostDataQuery, GetPostDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostDataQuery, GetPostDataQueryVariables>(GetPostDataDocument, options);
        }
export type GetPostDataQueryHookResult = ReturnType<typeof useGetPostDataQuery>;
export type GetPostDataLazyQueryHookResult = ReturnType<typeof useGetPostDataLazyQuery>;
export type GetPostDataQueryResult = Apollo.QueryResult<GetPostDataQuery, GetPostDataQueryVariables>;
export const GetUserDataDocument = gql`
    query GetUserData($where: UserWhereUniqueInput!) {
  user(where: $where) {
    ...User
    first_name
    last_name
    created_at
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUserDataQuery__
 *
 * To run a query within a React component, call `useGetUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDataQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUserDataQuery(baseOptions: Apollo.QueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
      }
export function useGetUserDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
        }
export type GetUserDataQueryHookResult = ReturnType<typeof useGetUserDataQuery>;
export type GetUserDataLazyQueryHookResult = ReturnType<typeof useGetUserDataLazyQuery>;
export type GetUserDataQueryResult = Apollo.QueryResult<GetUserDataQuery, GetUserDataQueryVariables>;
export const GetUserAdditionalInformationsDocument = gql`
    query GetUserAdditionalInformations($where: PreferenceWhereUniqueInput!) {
  preference(where: $where) {
    website
    location
    bio
  }
}
    `;

/**
 * __useGetUserAdditionalInformationsQuery__
 *
 * To run a query within a React component, call `useGetUserAdditionalInformationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAdditionalInformationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAdditionalInformationsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUserAdditionalInformationsQuery(baseOptions: Apollo.QueryHookOptions<GetUserAdditionalInformationsQuery, GetUserAdditionalInformationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserAdditionalInformationsQuery, GetUserAdditionalInformationsQueryVariables>(GetUserAdditionalInformationsDocument, options);
      }
export function useGetUserAdditionalInformationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserAdditionalInformationsQuery, GetUserAdditionalInformationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserAdditionalInformationsQuery, GetUserAdditionalInformationsQueryVariables>(GetUserAdditionalInformationsDocument, options);
        }
export type GetUserAdditionalInformationsQueryHookResult = ReturnType<typeof useGetUserAdditionalInformationsQuery>;
export type GetUserAdditionalInformationsLazyQueryHookResult = ReturnType<typeof useGetUserAdditionalInformationsLazyQuery>;
export type GetUserAdditionalInformationsQueryResult = Apollo.QueryResult<GetUserAdditionalInformationsQuery, GetUserAdditionalInformationsQueryVariables>;
export const SearchDocument = gql`
    query search($search: SearchInput!) {
  search(data: $search) {
    title
    slug
    id
    cover_picture
    Tags {
      name
      id
    }
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;