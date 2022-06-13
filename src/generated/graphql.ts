import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
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

export type AffectedRowsOutput = {
    __typename?: "AffectedRowsOutput";
    count: Scalars["Int"];
};

export type AggregateCategory = {
    __typename?: "AggregateCategory";
    _count: Maybe<CategoryCountAggregate>;
    _max: Maybe<CategoryMaxAggregate>;
    _min: Maybe<CategoryMinAggregate>;
};

export type AggregateComment = {
    __typename?: "AggregateComment";
    _count: Maybe<CommentCountAggregate>;
    _max: Maybe<CommentMaxAggregate>;
    _min: Maybe<CommentMinAggregate>;
};

export type AggregatePost = {
    __typename?: "AggregatePost";
    _count: Maybe<PostCountAggregate>;
    _max: Maybe<PostMaxAggregate>;
    _min: Maybe<PostMinAggregate>;
};

export type AggregateReply = {
    __typename?: "AggregateReply";
    _count: Maybe<ReplyCountAggregate>;
    _max: Maybe<ReplyMaxAggregate>;
    _min: Maybe<ReplyMinAggregate>;
};

export type AggregateResetPassword = {
    __typename?: "AggregateResetPassword";
    _count: Maybe<ResetPasswordCountAggregate>;
    _max: Maybe<ResetPasswordMaxAggregate>;
    _min: Maybe<ResetPasswordMinAggregate>;
};

export type AggregateTag = {
    __typename?: "AggregateTag";
    _count: Maybe<TagCountAggregate>;
    _max: Maybe<TagMaxAggregate>;
    _min: Maybe<TagMinAggregate>;
};

export type AggregateUser = {
    __typename?: "AggregateUser";
    _count: Maybe<UserCountAggregate>;
    _max: Maybe<UserMaxAggregate>;
    _min: Maybe<UserMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
    set?: InputMaybe<Scalars["Boolean"]>;
};

export type BoolFilter = {
    equals?: InputMaybe<Scalars["Boolean"]>;
    not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedBoolFilter>;
    _min?: InputMaybe<NestedBoolFilter>;
    equals?: InputMaybe<Scalars["Boolean"]>;
    not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Category = {
    __typename?: "Category";
    Post: Array<Post>;
    _count: Maybe<CategoryCount>;
    created_at: Scalars["DateTime"];
    id: Scalars["String"];
    name: Scalars["String"];
    updated_at: Scalars["DateTime"];
};

export type CategoryPostArgs = {
    cursor: InputMaybe<PostWhereUniqueInput>;
    distinct: InputMaybe<Array<PostScalarFieldEnum>>;
    orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<PostWhereInput>;
};

export type CategoryCount = {
    __typename?: "CategoryCount";
    Post: Scalars["Int"];
};

export type CategoryCountAggregate = {
    __typename?: "CategoryCountAggregate";
    _all: Scalars["Int"];
    created_at: Scalars["Int"];
    id: Scalars["Int"];
    name: Scalars["Int"];
    updated_at: Scalars["Int"];
};

export type CategoryCountOrderByAggregateInput = {
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
    Post?: InputMaybe<PostCreateNestedManyWithoutCategoryInput>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    name: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CategoryCreateManyInput = {
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    name: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
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
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    name: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CategoryGroupBy = {
    __typename?: "CategoryGroupBy";
    _count: Maybe<CategoryCountAggregate>;
    _max: Maybe<CategoryMaxAggregate>;
    _min: Maybe<CategoryMinAggregate>;
    created_at: Scalars["DateTime"];
    id: Scalars["String"];
    name: Scalars["String"];
    updated_at: Scalars["DateTime"];
};

export type CategoryMaxAggregate = {
    __typename?: "CategoryMaxAggregate";
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    name: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
};

export type CategoryMaxOrderByAggregateInput = {
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
    __typename?: "CategoryMinAggregate";
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    name: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
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
    CreatedAt = "created_at",
    Id = "id",
    Name = "name",
    UpdatedAt = "updated_at",
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
    delete?: InputMaybe<Scalars["Boolean"]>;
    disconnect?: InputMaybe<Scalars["Boolean"]>;
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
    id?: InputMaybe<Scalars["String"]>;
};

export type Comment = {
    __typename?: "Comment";
    Post: Post;
    Reply: Array<Reply>;
    _count: Maybe<CommentCount>;
    author: User;
    content: Scalars["String"];
    created_at: Scalars["DateTime"];
    id: Scalars["String"];
    postId: Scalars["String"];
    updated_at: Scalars["DateTime"];
    userId: Scalars["String"];
};

export type CommentReplyArgs = {
    cursor: InputMaybe<ReplyWhereUniqueInput>;
    distinct: InputMaybe<Array<ReplyScalarFieldEnum>>;
    orderBy: InputMaybe<Array<ReplyOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<ReplyWhereInput>;
};

export type CommentCount = {
    __typename?: "CommentCount";
    Reply: Scalars["Int"];
};

export type CommentCountAggregate = {
    __typename?: "CommentCountAggregate";
    _all: Scalars["Int"];
    content: Scalars["Int"];
    created_at: Scalars["Int"];
    id: Scalars["Int"];
    postId: Scalars["Int"];
    updated_at: Scalars["Int"];
    userId: Scalars["Int"];
};

export type CommentCountOrderByAggregateInput = {
    content?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    postId?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export type CommentCreateInput = {
    Post: PostCreateNestedOneWithoutCommentInput;
    Reply?: InputMaybe<ReplyCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentInput;
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CommentCreateManyAuthorInput = {
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    postId: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CommentCreateManyAuthorInputEnvelope = {
    data: Array<CommentCreateManyAuthorInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type CommentCreateManyInput = {
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    postId: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
    userId: Scalars["String"];
};

export type CommentCreateManyPostInput = {
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
    userId: Scalars["String"];
};

export type CommentCreateManyPostInputEnvelope = {
    data: Array<CommentCreateManyPostInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type CommentCreateNestedManyWithoutAuthorInput = {
    connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<CommentCreateOrConnectWithoutAuthorInput>
    >;
    create?: InputMaybe<Array<CommentCreateWithoutAuthorInput>>;
    createMany?: InputMaybe<CommentCreateManyAuthorInputEnvelope>;
};

export type CommentCreateNestedManyWithoutPostInput = {
    connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutPostInput>>;
    create?: InputMaybe<Array<CommentCreateWithoutPostInput>>;
    createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
};

export type CommentCreateNestedOneWithoutReplyInput = {
    connect?: InputMaybe<CommentWhereUniqueInput>;
    connectOrCreate?: InputMaybe<CommentCreateOrConnectWithoutReplyInput>;
    create?: InputMaybe<CommentCreateWithoutReplyInput>;
};

export type CommentCreateOrConnectWithoutAuthorInput = {
    create: CommentCreateWithoutAuthorInput;
    where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutPostInput = {
    create: CommentCreateWithoutPostInput;
    where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutReplyInput = {
    create: CommentCreateWithoutReplyInput;
    where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutAuthorInput = {
    Post: PostCreateNestedOneWithoutCommentInput;
    Reply?: InputMaybe<ReplyCreateNestedManyWithoutCommentInput>;
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CommentCreateWithoutPostInput = {
    Reply?: InputMaybe<ReplyCreateNestedManyWithoutCommentInput>;
    author: UserCreateNestedOneWithoutCommentInput;
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CommentCreateWithoutReplyInput = {
    Post: PostCreateNestedOneWithoutCommentInput;
    author: UserCreateNestedOneWithoutCommentInput;
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CommentGroupBy = {
    __typename?: "CommentGroupBy";
    _count: Maybe<CommentCountAggregate>;
    _max: Maybe<CommentMaxAggregate>;
    _min: Maybe<CommentMinAggregate>;
    content: Scalars["String"];
    created_at: Scalars["DateTime"];
    id: Scalars["String"];
    postId: Scalars["String"];
    updated_at: Scalars["DateTime"];
    userId: Scalars["String"];
};

export type CommentListRelationFilter = {
    every?: InputMaybe<CommentWhereInput>;
    none?: InputMaybe<CommentWhereInput>;
    some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
    __typename?: "CommentMaxAggregate";
    content: Maybe<Scalars["String"]>;
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    postId: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
    userId: Maybe<Scalars["String"]>;
};

export type CommentMaxOrderByAggregateInput = {
    content?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    postId?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export type CommentMinAggregate = {
    __typename?: "CommentMinAggregate";
    content: Maybe<Scalars["String"]>;
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    postId: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
    userId: Maybe<Scalars["String"]>;
};

export type CommentMinOrderByAggregateInput = {
    content?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    postId?: InputMaybe<SortOrder>;
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
    postId?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationInput = {
    Post?: InputMaybe<PostOrderByWithRelationInput>;
    Reply?: InputMaybe<ReplyOrderByRelationAggregateInput>;
    author?: InputMaybe<UserOrderByWithRelationInput>;
    content?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    postId?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export type CommentRelationFilter = {
    is?: InputMaybe<CommentWhereInput>;
    isNot?: InputMaybe<CommentWhereInput>;
};

export enum CommentScalarFieldEnum {
    Content = "content",
    CreatedAt = "created_at",
    Id = "id",
    PostId = "postId",
    UpdatedAt = "updated_at",
    UserId = "userId",
}

export type CommentScalarWhereInput = {
    AND?: InputMaybe<Array<CommentScalarWhereInput>>;
    NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
    OR?: InputMaybe<Array<CommentScalarWhereInput>>;
    content?: InputMaybe<StringFilter>;
    created_at?: InputMaybe<DateTimeFilter>;
    id?: InputMaybe<StringFilter>;
    postId?: InputMaybe<StringFilter>;
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
    postId?: InputMaybe<StringWithAggregatesFilter>;
    updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
    userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type CommentUpdateInput = {
    Post?: InputMaybe<PostUpdateOneRequiredWithoutCommentInput>;
    Reply?: InputMaybe<ReplyUpdateManyWithoutCommentInput>;
    author?: InputMaybe<UserUpdateOneRequiredWithoutCommentInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyMutationInput = {
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    data: CommentUpdateManyMutationInput;
    where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
    data: CommentUpdateManyMutationInput;
    where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutAuthorInput = {
    connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<CommentCreateOrConnectWithoutAuthorInput>
    >;
    create?: InputMaybe<Array<CommentCreateWithoutAuthorInput>>;
    createMany?: InputMaybe<CommentCreateManyAuthorInputEnvelope>;
    delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
    deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
    disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
    set?: InputMaybe<Array<CommentWhereUniqueInput>>;
    update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>>;
    updateMany?: InputMaybe<
        Array<CommentUpdateManyWithWhereWithoutAuthorInput>
    >;
    upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>>;
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

export type CommentUpdateOneRequiredWithoutReplyInput = {
    connect?: InputMaybe<CommentWhereUniqueInput>;
    connectOrCreate?: InputMaybe<CommentCreateOrConnectWithoutReplyInput>;
    create?: InputMaybe<CommentCreateWithoutReplyInput>;
    update?: InputMaybe<CommentUpdateWithoutReplyInput>;
    upsert?: InputMaybe<CommentUpsertWithoutReplyInput>;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    data: CommentUpdateWithoutAuthorInput;
    where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    data: CommentUpdateWithoutPostInput;
    where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutAuthorInput = {
    Post?: InputMaybe<PostUpdateOneRequiredWithoutCommentInput>;
    Reply?: InputMaybe<ReplyUpdateManyWithoutCommentInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutPostInput = {
    Reply?: InputMaybe<ReplyUpdateManyWithoutCommentInput>;
    author?: InputMaybe<UserUpdateOneRequiredWithoutCommentInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutReplyInput = {
    Post?: InputMaybe<PostUpdateOneRequiredWithoutCommentInput>;
    author?: InputMaybe<UserUpdateOneRequiredWithoutCommentInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    create: CommentCreateWithoutAuthorInput;
    update: CommentUpdateWithoutAuthorInput;
    where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    create: CommentCreateWithoutPostInput;
    update: CommentUpdateWithoutPostInput;
    where: CommentWhereUniqueInput;
};

export type CommentUpsertWithoutReplyInput = {
    create: CommentCreateWithoutReplyInput;
    update: CommentUpdateWithoutReplyInput;
};

export type CommentWhereInput = {
    AND?: InputMaybe<Array<CommentWhereInput>>;
    NOT?: InputMaybe<Array<CommentWhereInput>>;
    OR?: InputMaybe<Array<CommentWhereInput>>;
    Post?: InputMaybe<PostRelationFilter>;
    Reply?: InputMaybe<ReplyListRelationFilter>;
    author?: InputMaybe<UserRelationFilter>;
    content?: InputMaybe<StringFilter>;
    created_at?: InputMaybe<DateTimeFilter>;
    id?: InputMaybe<StringFilter>;
    postId?: InputMaybe<StringFilter>;
    updated_at?: InputMaybe<DateTimeFilter>;
    userId?: InputMaybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
    id?: InputMaybe<Scalars["String"]>;
};

export type DateTimeFieldUpdateOperationsInput = {
    set?: InputMaybe<Scalars["DateTime"]>;
};

export type DateTimeFilter = {
    equals?: InputMaybe<Scalars["DateTime"]>;
    gt?: InputMaybe<Scalars["DateTime"]>;
    gte?: InputMaybe<Scalars["DateTime"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]>>;
    lt?: InputMaybe<Scalars["DateTime"]>;
    lte?: InputMaybe<Scalars["DateTime"]>;
    not?: InputMaybe<NestedDateTimeFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedDateTimeFilter>;
    _min?: InputMaybe<NestedDateTimeFilter>;
    equals?: InputMaybe<Scalars["DateTime"]>;
    gt?: InputMaybe<Scalars["DateTime"]>;
    gte?: InputMaybe<Scalars["DateTime"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]>>;
    lt?: InputMaybe<Scalars["DateTime"]>;
    lte?: InputMaybe<Scalars["DateTime"]>;
    not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type EnumRoleNullableListFilter = {
    equals?: InputMaybe<Array<Role>>;
    has?: InputMaybe<Role>;
    hasEvery?: InputMaybe<Array<Role>>;
    hasSome?: InputMaybe<Array<Role>>;
    isEmpty?: InputMaybe<Scalars["Boolean"]>;
};

export type LoginInput = {
    email: Scalars["String"];
    password: Scalars["String"];
};

export type Mutation = {
    __typename?: "Mutation";
    createCategory: Category;
    createComment: Comment;
    createManyCategory: AffectedRowsOutput;
    createManyComment: AffectedRowsOutput;
    createManyPost: AffectedRowsOutput;
    createManyReply: AffectedRowsOutput;
    createManyResetPassword: AffectedRowsOutput;
    createManyTag: AffectedRowsOutput;
    createManyUser: AffectedRowsOutput;
    createPost: Post;
    createReply: Reply;
    createResetPassword: ResetPassword;
    createTag: Tag;
    createUser: User;
    deleteCategory: Maybe<Category>;
    deleteComment: Maybe<Comment>;
    deleteManyCategory: AffectedRowsOutput;
    deleteManyComment: AffectedRowsOutput;
    deleteManyPost: AffectedRowsOutput;
    deleteManyReply: AffectedRowsOutput;
    deleteManyResetPassword: AffectedRowsOutput;
    deleteManyTag: AffectedRowsOutput;
    deleteManyUser: AffectedRowsOutput;
    deletePost: Maybe<Post>;
    deleteReply: Maybe<Reply>;
    deleteResetPassword: Maybe<ResetPassword>;
    deleteTag: Maybe<Tag>;
    deleteUser: Maybe<User>;
    login: User;
    logout: Scalars["String"];
    me: User;
    register: User;
    updateCategory: Maybe<Category>;
    updateComment: Maybe<Comment>;
    updateManyCategory: AffectedRowsOutput;
    updateManyComment: AffectedRowsOutput;
    updateManyPost: AffectedRowsOutput;
    updateManyReply: AffectedRowsOutput;
    updateManyResetPassword: AffectedRowsOutput;
    updateManyTag: AffectedRowsOutput;
    updateManyUser: AffectedRowsOutput;
    updatePost: Maybe<Post>;
    updateReply: Maybe<Reply>;
    updateResetPassword: Maybe<ResetPassword>;
    updateTag: Maybe<Tag>;
    updateUser: Maybe<User>;
    uploadCoverPicture: Post;
    uploadPostPicture: Picture;
    upsertCategory: Category;
    upsertComment: Comment;
    upsertPost: Post;
    upsertReply: Reply;
    upsertResetPassword: ResetPassword;
    upsertTag: Tag;
    upsertUser: User;
};

export type MutationCreateCategoryArgs = {
    data: CategoryCreateInput;
};

export type MutationCreateCommentArgs = {
    data: CommentCreateInput;
};

export type MutationCreateManyCategoryArgs = {
    data: Array<CategoryCreateManyInput>;
    skipDuplicates: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateManyCommentArgs = {
    data: Array<CommentCreateManyInput>;
    skipDuplicates: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateManyPostArgs = {
    data: Array<PostCreateManyInput>;
    skipDuplicates: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateManyReplyArgs = {
    data: Array<ReplyCreateManyInput>;
    skipDuplicates: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateManyResetPasswordArgs = {
    data: Array<ResetPasswordCreateManyInput>;
    skipDuplicates: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateManyTagArgs = {
    data: Array<TagCreateManyInput>;
    skipDuplicates: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateManyUserArgs = {
    data: Array<UserCreateManyInput>;
    skipDuplicates: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreatePostArgs = {
    data: PostCreateInput;
};

export type MutationCreateReplyArgs = {
    data: ReplyCreateInput;
};

export type MutationCreateResetPasswordArgs = {
    data: ResetPasswordCreateInput;
};

export type MutationCreateTagArgs = {
    data: TagCreateInput;
};

export type MutationCreateUserArgs = {
    data: UserCreateInput;
};

export type MutationDeleteCategoryArgs = {
    where: CategoryWhereUniqueInput;
};

export type MutationDeleteCommentArgs = {
    where: CommentWhereUniqueInput;
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

export type MutationDeleteManyReplyArgs = {
    where: InputMaybe<ReplyWhereInput>;
};

export type MutationDeleteManyResetPasswordArgs = {
    where: InputMaybe<ResetPasswordWhereInput>;
};

export type MutationDeleteManyTagArgs = {
    where: InputMaybe<TagWhereInput>;
};

export type MutationDeleteManyUserArgs = {
    where: InputMaybe<UserWhereInput>;
};

export type MutationDeletePostArgs = {
    where: PostWhereUniqueInput;
};

export type MutationDeleteReplyArgs = {
    where: ReplyWhereUniqueInput;
};

export type MutationDeleteResetPasswordArgs = {
    where: ResetPasswordWhereUniqueInput;
};

export type MutationDeleteTagArgs = {
    where: TagWhereUniqueInput;
};

export type MutationDeleteUserArgs = {
    where: UserWhereUniqueInput;
};

export type MutationLoginArgs = {
    data: LoginInput;
};

export type MutationRegisterArgs = {
    data: RegisterInput;
};

export type MutationUpdateCategoryArgs = {
    data: CategoryUpdateInput;
    where: CategoryWhereUniqueInput;
};

export type MutationUpdateCommentArgs = {
    data: CommentUpdateInput;
    where: CommentWhereUniqueInput;
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

export type MutationUpdateManyReplyArgs = {
    data: ReplyUpdateManyMutationInput;
    where: InputMaybe<ReplyWhereInput>;
};

export type MutationUpdateManyResetPasswordArgs = {
    data: ResetPasswordUpdateManyMutationInput;
    where: InputMaybe<ResetPasswordWhereInput>;
};

export type MutationUpdateManyTagArgs = {
    data: TagUpdateManyMutationInput;
    where: InputMaybe<TagWhereInput>;
};

export type MutationUpdateManyUserArgs = {
    data: UserUpdateManyMutationInput;
    where: InputMaybe<UserWhereInput>;
};

export type MutationUpdatePostArgs = {
    data: PostUpdateInput;
    where: PostWhereUniqueInput;
};

export type MutationUpdateReplyArgs = {
    data: ReplyUpdateInput;
    where: ReplyWhereUniqueInput;
};

export type MutationUpdateResetPasswordArgs = {
    data: ResetPasswordUpdateInput;
    where: ResetPasswordWhereUniqueInput;
};

export type MutationUpdateTagArgs = {
    data: TagUpdateInput;
    where: TagWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
};

export type MutationUploadCoverPictureArgs = {
    file: Scalars["Upload"];
};

export type MutationUploadPostPictureArgs = {
    file: Scalars["Upload"];
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

export type MutationUpsertReplyArgs = {
    create: ReplyCreateInput;
    update: ReplyUpdateInput;
    where: ReplyWhereUniqueInput;
};

export type MutationUpsertResetPasswordArgs = {
    create: ResetPasswordCreateInput;
    update: ResetPasswordUpdateInput;
    where: ResetPasswordWhereUniqueInput;
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

export type NestedBoolFilter = {
    equals?: InputMaybe<Scalars["Boolean"]>;
    not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedBoolFilter>;
    _min?: InputMaybe<NestedBoolFilter>;
    equals?: InputMaybe<Scalars["Boolean"]>;
    not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
    equals?: InputMaybe<Scalars["DateTime"]>;
    gt?: InputMaybe<Scalars["DateTime"]>;
    gte?: InputMaybe<Scalars["DateTime"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]>>;
    lt?: InputMaybe<Scalars["DateTime"]>;
    lte?: InputMaybe<Scalars["DateTime"]>;
    not?: InputMaybe<NestedDateTimeFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedDateTimeWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedDateTimeFilter>;
    _min?: InputMaybe<NestedDateTimeFilter>;
    equals?: InputMaybe<Scalars["DateTime"]>;
    gt?: InputMaybe<Scalars["DateTime"]>;
    gte?: InputMaybe<Scalars["DateTime"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]>>;
    lt?: InputMaybe<Scalars["DateTime"]>;
    lte?: InputMaybe<Scalars["DateTime"]>;
    not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedIntFilter = {
    equals?: InputMaybe<Scalars["Int"]>;
    gt?: InputMaybe<Scalars["Int"]>;
    gte?: InputMaybe<Scalars["Int"]>;
    in?: InputMaybe<Array<Scalars["Int"]>>;
    lt?: InputMaybe<Scalars["Int"]>;
    lte?: InputMaybe<Scalars["Int"]>;
    not?: InputMaybe<NestedIntFilter>;
    notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedIntNullableFilter = {
    equals?: InputMaybe<Scalars["Int"]>;
    gt?: InputMaybe<Scalars["Int"]>;
    gte?: InputMaybe<Scalars["Int"]>;
    in?: InputMaybe<Array<Scalars["Int"]>>;
    lt?: InputMaybe<Scalars["Int"]>;
    lte?: InputMaybe<Scalars["Int"]>;
    not?: InputMaybe<NestedIntNullableFilter>;
    notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedStringFilter = {
    contains?: InputMaybe<Scalars["String"]>;
    endsWith?: InputMaybe<Scalars["String"]>;
    equals?: InputMaybe<Scalars["String"]>;
    gt?: InputMaybe<Scalars["String"]>;
    gte?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<Scalars["String"]>>;
    lt?: InputMaybe<Scalars["String"]>;
    lte?: InputMaybe<Scalars["String"]>;
    not?: InputMaybe<NestedStringFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]>>;
    startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
    contains?: InputMaybe<Scalars["String"]>;
    endsWith?: InputMaybe<Scalars["String"]>;
    equals?: InputMaybe<Scalars["String"]>;
    gt?: InputMaybe<Scalars["String"]>;
    gte?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<Scalars["String"]>>;
    lt?: InputMaybe<Scalars["String"]>;
    lte?: InputMaybe<Scalars["String"]>;
    not?: InputMaybe<NestedStringNullableFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]>>;
    startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringNullableWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntNullableFilter>;
    _max?: InputMaybe<NestedStringNullableFilter>;
    _min?: InputMaybe<NestedStringNullableFilter>;
    contains?: InputMaybe<Scalars["String"]>;
    endsWith?: InputMaybe<Scalars["String"]>;
    equals?: InputMaybe<Scalars["String"]>;
    gt?: InputMaybe<Scalars["String"]>;
    gte?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<Scalars["String"]>>;
    lt?: InputMaybe<Scalars["String"]>;
    lte?: InputMaybe<Scalars["String"]>;
    not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]>>;
    startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedStringFilter>;
    _min?: InputMaybe<NestedStringFilter>;
    contains?: InputMaybe<Scalars["String"]>;
    endsWith?: InputMaybe<Scalars["String"]>;
    equals?: InputMaybe<Scalars["String"]>;
    gt?: InputMaybe<Scalars["String"]>;
    gte?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<Scalars["String"]>>;
    lt?: InputMaybe<Scalars["String"]>;
    lte?: InputMaybe<Scalars["String"]>;
    not?: InputMaybe<NestedStringWithAggregatesFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]>>;
    startsWith?: InputMaybe<Scalars["String"]>;
};

export type NullableStringFieldUpdateOperationsInput = {
    set?: InputMaybe<Scalars["String"]>;
};

export type Picture = {
    __typename?: "Picture";
    url: Scalars["String"];
};

export type Post = {
    __typename?: "Post";
    Category: Maybe<Category>;
    Comment: Array<Comment>;
    Tags: Array<Tag>;
    _count: Maybe<PostCount>;
    author: User;
    categoryId: Maybe<Scalars["String"]>;
    content: Scalars["String"];
    cover_picture: Maybe<Scalars["String"]>;
    created_at: Scalars["DateTime"];
    id: Scalars["String"];
    isDraft: Scalars["Boolean"];
    slug: Scalars["String"];
    title: Scalars["String"];
    updated_at: Scalars["DateTime"];
    userId: Scalars["String"];
};

export type PostCommentArgs = {
    cursor: InputMaybe<CommentWhereUniqueInput>;
    distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
    orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<CommentWhereInput>;
};

export type PostTagsArgs = {
    cursor: InputMaybe<TagWhereUniqueInput>;
    distinct: InputMaybe<Array<TagScalarFieldEnum>>;
    orderBy: InputMaybe<Array<TagOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<TagWhereInput>;
};

export type PostCount = {
    __typename?: "PostCount";
    Comment: Scalars["Int"];
    Tags: Scalars["Int"];
};

export type PostCountAggregate = {
    __typename?: "PostCountAggregate";
    _all: Scalars["Int"];
    categoryId: Scalars["Int"];
    content: Scalars["Int"];
    cover_picture: Scalars["Int"];
    created_at: Scalars["Int"];
    id: Scalars["Int"];
    isDraft: Scalars["Int"];
    slug: Scalars["Int"];
    title: Scalars["Int"];
    updated_at: Scalars["Int"];
    userId: Scalars["Int"];
};

export type PostCountOrderByAggregateInput = {
    categoryId?: InputMaybe<SortOrder>;
    content?: InputMaybe<SortOrder>;
    cover_picture?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    isDraft?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export type PostCreateInput = {
    Category?: InputMaybe<CategoryCreateNestedOneWithoutPostInput>;
    Comment?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
    Tags?: InputMaybe<TagCreateNestedManyWithoutPostInput>;
    author: UserCreateNestedOneWithoutPostInput;
    content: Scalars["String"];
    cover_picture?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    isDraft?: InputMaybe<Scalars["Boolean"]>;
    slug: Scalars["String"];
    title: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PostCreateManyAuthorInput = {
    categoryId?: InputMaybe<Scalars["String"]>;
    content: Scalars["String"];
    cover_picture?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    isDraft?: InputMaybe<Scalars["Boolean"]>;
    slug: Scalars["String"];
    title: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PostCreateManyAuthorInputEnvelope = {
    data: Array<PostCreateManyAuthorInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type PostCreateManyCategoryInput = {
    content: Scalars["String"];
    cover_picture?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    isDraft?: InputMaybe<Scalars["Boolean"]>;
    slug: Scalars["String"];
    title: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
    userId: Scalars["String"];
};

export type PostCreateManyCategoryInputEnvelope = {
    data: Array<PostCreateManyCategoryInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type PostCreateManyInput = {
    categoryId?: InputMaybe<Scalars["String"]>;
    content: Scalars["String"];
    cover_picture?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    isDraft?: InputMaybe<Scalars["Boolean"]>;
    slug: Scalars["String"];
    title: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
    userId: Scalars["String"];
};

export type PostCreateNestedManyWithoutAuthorInput = {
    connect?: InputMaybe<Array<PostWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
    create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
    createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateNestedManyWithoutCategoryInput = {
    connect?: InputMaybe<Array<PostWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<PostCreateOrConnectWithoutCategoryInput>
    >;
    create?: InputMaybe<Array<PostCreateWithoutCategoryInput>>;
    createMany?: InputMaybe<PostCreateManyCategoryInputEnvelope>;
};

export type PostCreateNestedManyWithoutTagsInput = {
    connect?: InputMaybe<Array<PostWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutTagsInput>>;
    create?: InputMaybe<Array<PostCreateWithoutTagsInput>>;
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

export type PostCreateWithoutAuthorInput = {
    Category?: InputMaybe<CategoryCreateNestedOneWithoutPostInput>;
    Comment?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
    Tags?: InputMaybe<TagCreateNestedManyWithoutPostInput>;
    content: Scalars["String"];
    cover_picture?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    isDraft?: InputMaybe<Scalars["Boolean"]>;
    slug: Scalars["String"];
    title: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PostCreateWithoutCategoryInput = {
    Comment?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
    Tags?: InputMaybe<TagCreateNestedManyWithoutPostInput>;
    author: UserCreateNestedOneWithoutPostInput;
    content: Scalars["String"];
    cover_picture?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    isDraft?: InputMaybe<Scalars["Boolean"]>;
    slug: Scalars["String"];
    title: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PostCreateWithoutCommentInput = {
    Category?: InputMaybe<CategoryCreateNestedOneWithoutPostInput>;
    Tags?: InputMaybe<TagCreateNestedManyWithoutPostInput>;
    author: UserCreateNestedOneWithoutPostInput;
    content: Scalars["String"];
    cover_picture?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    isDraft?: InputMaybe<Scalars["Boolean"]>;
    slug: Scalars["String"];
    title: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PostCreateWithoutTagsInput = {
    Category?: InputMaybe<CategoryCreateNestedOneWithoutPostInput>;
    Comment?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
    author: UserCreateNestedOneWithoutPostInput;
    content: Scalars["String"];
    cover_picture?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    isDraft?: InputMaybe<Scalars["Boolean"]>;
    slug: Scalars["String"];
    title: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PostGroupBy = {
    __typename?: "PostGroupBy";
    _count: Maybe<PostCountAggregate>;
    _max: Maybe<PostMaxAggregate>;
    _min: Maybe<PostMinAggregate>;
    categoryId: Maybe<Scalars["String"]>;
    content: Scalars["String"];
    cover_picture: Maybe<Scalars["String"]>;
    created_at: Scalars["DateTime"];
    id: Scalars["String"];
    isDraft: Scalars["Boolean"];
    slug: Scalars["String"];
    title: Scalars["String"];
    updated_at: Scalars["DateTime"];
    userId: Scalars["String"];
};

export type PostListRelationFilter = {
    every?: InputMaybe<PostWhereInput>;
    none?: InputMaybe<PostWhereInput>;
    some?: InputMaybe<PostWhereInput>;
};

export type PostMaxAggregate = {
    __typename?: "PostMaxAggregate";
    categoryId: Maybe<Scalars["String"]>;
    content: Maybe<Scalars["String"]>;
    cover_picture: Maybe<Scalars["String"]>;
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    isDraft: Maybe<Scalars["Boolean"]>;
    slug: Maybe<Scalars["String"]>;
    title: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
    userId: Maybe<Scalars["String"]>;
};

export type PostMaxOrderByAggregateInput = {
    categoryId?: InputMaybe<SortOrder>;
    content?: InputMaybe<SortOrder>;
    cover_picture?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    isDraft?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export type PostMinAggregate = {
    __typename?: "PostMinAggregate";
    categoryId: Maybe<Scalars["String"]>;
    content: Maybe<Scalars["String"]>;
    cover_picture: Maybe<Scalars["String"]>;
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    isDraft: Maybe<Scalars["Boolean"]>;
    slug: Maybe<Scalars["String"]>;
    title: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
    userId: Maybe<Scalars["String"]>;
};

export type PostMinOrderByAggregateInput = {
    categoryId?: InputMaybe<SortOrder>;
    content?: InputMaybe<SortOrder>;
    cover_picture?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    isDraft?: InputMaybe<SortOrder>;
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
    slug?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
    Category?: InputMaybe<CategoryOrderByWithRelationInput>;
    Comment?: InputMaybe<CommentOrderByRelationAggregateInput>;
    Tags?: InputMaybe<TagOrderByRelationAggregateInput>;
    author?: InputMaybe<UserOrderByWithRelationInput>;
    categoryId?: InputMaybe<SortOrder>;
    content?: InputMaybe<SortOrder>;
    cover_picture?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    isDraft?: InputMaybe<SortOrder>;
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
    CategoryId = "categoryId",
    Content = "content",
    CoverPicture = "cover_picture",
    CreatedAt = "created_at",
    Id = "id",
    IsDraft = "isDraft",
    Slug = "slug",
    Title = "title",
    UpdatedAt = "updated_at",
    UserId = "userId",
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
    slug?: InputMaybe<StringWithAggregatesFilter>;
    title?: InputMaybe<StringWithAggregatesFilter>;
    updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
    userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type PostUpdateInput = {
    Category?: InputMaybe<CategoryUpdateOneWithoutPostInput>;
    Comment?: InputMaybe<CommentUpdateManyWithoutPostInput>;
    Tags?: InputMaybe<TagUpdateManyWithoutPostInput>;
    author?: InputMaybe<UserUpdateOneRequiredWithoutPostInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
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
    connectOrCreate?: InputMaybe<
        Array<PostCreateOrConnectWithoutCategoryInput>
    >;
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

export type PostUpdateWithoutAuthorInput = {
    Category?: InputMaybe<CategoryUpdateOneWithoutPostInput>;
    Comment?: InputMaybe<CommentUpdateManyWithoutPostInput>;
    Tags?: InputMaybe<TagUpdateManyWithoutPostInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
    slug?: InputMaybe<StringFieldUpdateOperationsInput>;
    title?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCategoryInput = {
    Comment?: InputMaybe<CommentUpdateManyWithoutPostInput>;
    Tags?: InputMaybe<TagUpdateManyWithoutPostInput>;
    author?: InputMaybe<UserUpdateOneRequiredWithoutPostInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
    slug?: InputMaybe<StringFieldUpdateOperationsInput>;
    title?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCommentInput = {
    Category?: InputMaybe<CategoryUpdateOneWithoutPostInput>;
    Tags?: InputMaybe<TagUpdateManyWithoutPostInput>;
    author?: InputMaybe<UserUpdateOneRequiredWithoutPostInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
    slug?: InputMaybe<StringFieldUpdateOperationsInput>;
    title?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutTagsInput = {
    Category?: InputMaybe<CategoryUpdateOneWithoutPostInput>;
    Comment?: InputMaybe<CommentUpdateManyWithoutPostInput>;
    author?: InputMaybe<UserUpdateOneRequiredWithoutPostInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    cover_picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    isDraft?: InputMaybe<BoolFieldUpdateOperationsInput>;
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
    author?: InputMaybe<UserRelationFilter>;
    categoryId?: InputMaybe<StringNullableFilter>;
    content?: InputMaybe<StringFilter>;
    cover_picture?: InputMaybe<StringNullableFilter>;
    created_at?: InputMaybe<DateTimeFilter>;
    id?: InputMaybe<StringFilter>;
    isDraft?: InputMaybe<BoolFilter>;
    slug?: InputMaybe<StringFilter>;
    title?: InputMaybe<StringFilter>;
    updated_at?: InputMaybe<DateTimeFilter>;
    userId?: InputMaybe<StringFilter>;
};

export type PostWhereUniqueInput = {
    id?: InputMaybe<Scalars["String"]>;
    slug?: InputMaybe<Scalars["String"]>;
};

export type Query = {
    __typename?: "Query";
    aggregateCategory: AggregateCategory;
    aggregateComment: AggregateComment;
    aggregatePost: AggregatePost;
    aggregateReply: AggregateReply;
    aggregateResetPassword: AggregateResetPassword;
    aggregateTag: AggregateTag;
    aggregateUser: AggregateUser;
    categories: Array<Category>;
    category: Maybe<Category>;
    comment: Maybe<Comment>;
    comments: Array<Comment>;
    findFirstCategory: Maybe<Category>;
    findFirstComment: Maybe<Comment>;
    findFirstPost: Maybe<Post>;
    findFirstReply: Maybe<Reply>;
    findFirstResetPassword: Maybe<ResetPassword>;
    findFirstTag: Maybe<Tag>;
    findFirstUser: Maybe<User>;
    groupByCategory: Array<CategoryGroupBy>;
    groupByComment: Array<CommentGroupBy>;
    groupByPost: Array<PostGroupBy>;
    groupByReply: Array<ReplyGroupBy>;
    groupByResetPassword: Array<ResetPasswordGroupBy>;
    groupByTag: Array<TagGroupBy>;
    groupByUser: Array<UserGroupBy>;
    post: Maybe<Post>;
    posts: Array<Post>;
    replies: Array<Reply>;
    reply: Maybe<Reply>;
    resetPassword: Maybe<ResetPassword>;
    resetPasswords: Array<ResetPassword>;
    tag: Maybe<Tag>;
    tags: Array<Tag>;
    user: Maybe<User>;
    users: Array<User>;
};

export type QueryAggregateCategoryArgs = {
    cursor: InputMaybe<CategoryWhereUniqueInput>;
    orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<CategoryWhereInput>;
};

export type QueryAggregateCommentArgs = {
    cursor: InputMaybe<CommentWhereUniqueInput>;
    orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<CommentWhereInput>;
};

export type QueryAggregatePostArgs = {
    cursor: InputMaybe<PostWhereUniqueInput>;
    orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<PostWhereInput>;
};

export type QueryAggregateReplyArgs = {
    cursor: InputMaybe<ReplyWhereUniqueInput>;
    orderBy: InputMaybe<Array<ReplyOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<ReplyWhereInput>;
};

export type QueryAggregateResetPasswordArgs = {
    cursor: InputMaybe<ResetPasswordWhereUniqueInput>;
    orderBy: InputMaybe<Array<ResetPasswordOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<ResetPasswordWhereInput>;
};

export type QueryAggregateTagArgs = {
    cursor: InputMaybe<TagWhereUniqueInput>;
    orderBy: InputMaybe<Array<TagOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<TagWhereInput>;
};

export type QueryAggregateUserArgs = {
    cursor: InputMaybe<UserWhereUniqueInput>;
    orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<UserWhereInput>;
};

export type QueryCategoriesArgs = {
    cursor: InputMaybe<CategoryWhereUniqueInput>;
    distinct: InputMaybe<Array<CategoryScalarFieldEnum>>;
    orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
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
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<CommentWhereInput>;
};

export type QueryFindFirstCategoryArgs = {
    cursor: InputMaybe<CategoryWhereUniqueInput>;
    distinct: InputMaybe<Array<CategoryScalarFieldEnum>>;
    orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<CategoryWhereInput>;
};

export type QueryFindFirstCommentArgs = {
    cursor: InputMaybe<CommentWhereUniqueInput>;
    distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
    orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<CommentWhereInput>;
};

export type QueryFindFirstPostArgs = {
    cursor: InputMaybe<PostWhereUniqueInput>;
    distinct: InputMaybe<Array<PostScalarFieldEnum>>;
    orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<PostWhereInput>;
};

export type QueryFindFirstReplyArgs = {
    cursor: InputMaybe<ReplyWhereUniqueInput>;
    distinct: InputMaybe<Array<ReplyScalarFieldEnum>>;
    orderBy: InputMaybe<Array<ReplyOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<ReplyWhereInput>;
};

export type QueryFindFirstResetPasswordArgs = {
    cursor: InputMaybe<ResetPasswordWhereUniqueInput>;
    distinct: InputMaybe<Array<ResetPasswordScalarFieldEnum>>;
    orderBy: InputMaybe<Array<ResetPasswordOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<ResetPasswordWhereInput>;
};

export type QueryFindFirstTagArgs = {
    cursor: InputMaybe<TagWhereUniqueInput>;
    distinct: InputMaybe<Array<TagScalarFieldEnum>>;
    orderBy: InputMaybe<Array<TagOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<TagWhereInput>;
};

export type QueryFindFirstUserArgs = {
    cursor: InputMaybe<UserWhereUniqueInput>;
    distinct: InputMaybe<Array<UserScalarFieldEnum>>;
    orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<UserWhereInput>;
};

export type QueryGroupByCategoryArgs = {
    by: Array<CategoryScalarFieldEnum>;
    having: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
    orderBy: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<CategoryWhereInput>;
};

export type QueryGroupByCommentArgs = {
    by: Array<CommentScalarFieldEnum>;
    having: InputMaybe<CommentScalarWhereWithAggregatesInput>;
    orderBy: InputMaybe<Array<CommentOrderByWithAggregationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<CommentWhereInput>;
};

export type QueryGroupByPostArgs = {
    by: Array<PostScalarFieldEnum>;
    having: InputMaybe<PostScalarWhereWithAggregatesInput>;
    orderBy: InputMaybe<Array<PostOrderByWithAggregationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<PostWhereInput>;
};

export type QueryGroupByReplyArgs = {
    by: Array<ReplyScalarFieldEnum>;
    having: InputMaybe<ReplyScalarWhereWithAggregatesInput>;
    orderBy: InputMaybe<Array<ReplyOrderByWithAggregationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<ReplyWhereInput>;
};

export type QueryGroupByResetPasswordArgs = {
    by: Array<ResetPasswordScalarFieldEnum>;
    having: InputMaybe<ResetPasswordScalarWhereWithAggregatesInput>;
    orderBy: InputMaybe<Array<ResetPasswordOrderByWithAggregationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<ResetPasswordWhereInput>;
};

export type QueryGroupByTagArgs = {
    by: Array<TagScalarFieldEnum>;
    having: InputMaybe<TagScalarWhereWithAggregatesInput>;
    orderBy: InputMaybe<Array<TagOrderByWithAggregationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<TagWhereInput>;
};

export type QueryGroupByUserArgs = {
    by: Array<UserScalarFieldEnum>;
    having: InputMaybe<UserScalarWhereWithAggregatesInput>;
    orderBy: InputMaybe<Array<UserOrderByWithAggregationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<UserWhereInput>;
};

export type QueryPostArgs = {
    where: PostWhereUniqueInput;
};

export type QueryPostsArgs = {
    cursor: InputMaybe<PostWhereUniqueInput>;
    distinct: InputMaybe<Array<PostScalarFieldEnum>>;
    orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<PostWhereInput>;
};

export type QueryRepliesArgs = {
    cursor: InputMaybe<ReplyWhereUniqueInput>;
    distinct: InputMaybe<Array<ReplyScalarFieldEnum>>;
    orderBy: InputMaybe<Array<ReplyOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<ReplyWhereInput>;
};

export type QueryReplyArgs = {
    where: ReplyWhereUniqueInput;
};

export type QueryResetPasswordArgs = {
    where: ResetPasswordWhereUniqueInput;
};

export type QueryResetPasswordsArgs = {
    cursor: InputMaybe<ResetPasswordWhereUniqueInput>;
    distinct: InputMaybe<Array<ResetPasswordScalarFieldEnum>>;
    orderBy: InputMaybe<Array<ResetPasswordOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<ResetPasswordWhereInput>;
};

export type QueryTagArgs = {
    where: TagWhereUniqueInput;
};

export type QueryTagsArgs = {
    cursor: InputMaybe<TagWhereUniqueInput>;
    distinct: InputMaybe<Array<TagScalarFieldEnum>>;
    orderBy: InputMaybe<Array<TagOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<TagWhereInput>;
};

export type QueryUserArgs = {
    where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
    cursor: InputMaybe<UserWhereUniqueInput>;
    distinct: InputMaybe<Array<UserScalarFieldEnum>>;
    orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
    Default = "default",
    Insensitive = "insensitive",
}

export type RegisterInput = {
    email: Scalars["String"];
    nickName: Scalars["String"];
    password: Scalars["String"];
};

export type Reply = {
    __typename?: "Reply";
    Comment: Comment;
    author: User;
    commentId: Scalars["String"];
    content: Scalars["String"];
    created_at: Scalars["DateTime"];
    id: Scalars["String"];
    updated_at: Scalars["DateTime"];
    userId: Scalars["String"];
};

export type ReplyCountAggregate = {
    __typename?: "ReplyCountAggregate";
    _all: Scalars["Int"];
    commentId: Scalars["Int"];
    content: Scalars["Int"];
    created_at: Scalars["Int"];
    id: Scalars["Int"];
    updated_at: Scalars["Int"];
    userId: Scalars["Int"];
};

export type ReplyCountOrderByAggregateInput = {
    commentId?: InputMaybe<SortOrder>;
    content?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export type ReplyCreateInput = {
    Comment: CommentCreateNestedOneWithoutReplyInput;
    author: UserCreateNestedOneWithoutReplyInput;
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReplyCreateManyAuthorInput = {
    commentId: Scalars["String"];
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReplyCreateManyAuthorInputEnvelope = {
    data: Array<ReplyCreateManyAuthorInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ReplyCreateManyCommentInput = {
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
    userId: Scalars["String"];
};

export type ReplyCreateManyCommentInputEnvelope = {
    data: Array<ReplyCreateManyCommentInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ReplyCreateManyInput = {
    commentId: Scalars["String"];
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
    userId: Scalars["String"];
};

export type ReplyCreateNestedManyWithoutAuthorInput = {
    connect?: InputMaybe<Array<ReplyWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<Array<ReplyCreateOrConnectWithoutAuthorInput>>;
    create?: InputMaybe<Array<ReplyCreateWithoutAuthorInput>>;
    createMany?: InputMaybe<ReplyCreateManyAuthorInputEnvelope>;
};

export type ReplyCreateNestedManyWithoutCommentInput = {
    connect?: InputMaybe<Array<ReplyWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<ReplyCreateOrConnectWithoutCommentInput>
    >;
    create?: InputMaybe<Array<ReplyCreateWithoutCommentInput>>;
    createMany?: InputMaybe<ReplyCreateManyCommentInputEnvelope>;
};

export type ReplyCreateOrConnectWithoutAuthorInput = {
    create: ReplyCreateWithoutAuthorInput;
    where: ReplyWhereUniqueInput;
};

export type ReplyCreateOrConnectWithoutCommentInput = {
    create: ReplyCreateWithoutCommentInput;
    where: ReplyWhereUniqueInput;
};

export type ReplyCreateWithoutAuthorInput = {
    Comment: CommentCreateNestedOneWithoutReplyInput;
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReplyCreateWithoutCommentInput = {
    author: UserCreateNestedOneWithoutReplyInput;
    content: Scalars["String"];
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReplyGroupBy = {
    __typename?: "ReplyGroupBy";
    _count: Maybe<ReplyCountAggregate>;
    _max: Maybe<ReplyMaxAggregate>;
    _min: Maybe<ReplyMinAggregate>;
    commentId: Scalars["String"];
    content: Scalars["String"];
    created_at: Scalars["DateTime"];
    id: Scalars["String"];
    updated_at: Scalars["DateTime"];
    userId: Scalars["String"];
};

export type ReplyListRelationFilter = {
    every?: InputMaybe<ReplyWhereInput>;
    none?: InputMaybe<ReplyWhereInput>;
    some?: InputMaybe<ReplyWhereInput>;
};

export type ReplyMaxAggregate = {
    __typename?: "ReplyMaxAggregate";
    commentId: Maybe<Scalars["String"]>;
    content: Maybe<Scalars["String"]>;
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
    userId: Maybe<Scalars["String"]>;
};

export type ReplyMaxOrderByAggregateInput = {
    commentId?: InputMaybe<SortOrder>;
    content?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export type ReplyMinAggregate = {
    __typename?: "ReplyMinAggregate";
    commentId: Maybe<Scalars["String"]>;
    content: Maybe<Scalars["String"]>;
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
    userId: Maybe<Scalars["String"]>;
};

export type ReplyMinOrderByAggregateInput = {
    commentId?: InputMaybe<SortOrder>;
    content?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export type ReplyOrderByRelationAggregateInput = {
    _count?: InputMaybe<SortOrder>;
};

export type ReplyOrderByWithAggregationInput = {
    _count?: InputMaybe<ReplyCountOrderByAggregateInput>;
    _max?: InputMaybe<ReplyMaxOrderByAggregateInput>;
    _min?: InputMaybe<ReplyMinOrderByAggregateInput>;
    commentId?: InputMaybe<SortOrder>;
    content?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export type ReplyOrderByWithRelationInput = {
    Comment?: InputMaybe<CommentOrderByWithRelationInput>;
    author?: InputMaybe<UserOrderByWithRelationInput>;
    commentId?: InputMaybe<SortOrder>;
    content?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
    userId?: InputMaybe<SortOrder>;
};

export enum ReplyScalarFieldEnum {
    CommentId = "commentId",
    Content = "content",
    CreatedAt = "created_at",
    Id = "id",
    UpdatedAt = "updated_at",
    UserId = "userId",
}

export type ReplyScalarWhereInput = {
    AND?: InputMaybe<Array<ReplyScalarWhereInput>>;
    NOT?: InputMaybe<Array<ReplyScalarWhereInput>>;
    OR?: InputMaybe<Array<ReplyScalarWhereInput>>;
    commentId?: InputMaybe<StringFilter>;
    content?: InputMaybe<StringFilter>;
    created_at?: InputMaybe<DateTimeFilter>;
    id?: InputMaybe<StringFilter>;
    updated_at?: InputMaybe<DateTimeFilter>;
    userId?: InputMaybe<StringFilter>;
};

export type ReplyScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<ReplyScalarWhereWithAggregatesInput>>;
    NOT?: InputMaybe<Array<ReplyScalarWhereWithAggregatesInput>>;
    OR?: InputMaybe<Array<ReplyScalarWhereWithAggregatesInput>>;
    commentId?: InputMaybe<StringWithAggregatesFilter>;
    content?: InputMaybe<StringWithAggregatesFilter>;
    created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
    id?: InputMaybe<StringWithAggregatesFilter>;
    updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
    userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ReplyUpdateInput = {
    Comment?: InputMaybe<CommentUpdateOneRequiredWithoutReplyInput>;
    author?: InputMaybe<UserUpdateOneRequiredWithoutReplyInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplyUpdateManyMutationInput = {
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplyUpdateManyWithWhereWithoutAuthorInput = {
    data: ReplyUpdateManyMutationInput;
    where: ReplyScalarWhereInput;
};

export type ReplyUpdateManyWithWhereWithoutCommentInput = {
    data: ReplyUpdateManyMutationInput;
    where: ReplyScalarWhereInput;
};

export type ReplyUpdateManyWithoutAuthorInput = {
    connect?: InputMaybe<Array<ReplyWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<Array<ReplyCreateOrConnectWithoutAuthorInput>>;
    create?: InputMaybe<Array<ReplyCreateWithoutAuthorInput>>;
    createMany?: InputMaybe<ReplyCreateManyAuthorInputEnvelope>;
    delete?: InputMaybe<Array<ReplyWhereUniqueInput>>;
    deleteMany?: InputMaybe<Array<ReplyScalarWhereInput>>;
    disconnect?: InputMaybe<Array<ReplyWhereUniqueInput>>;
    set?: InputMaybe<Array<ReplyWhereUniqueInput>>;
    update?: InputMaybe<Array<ReplyUpdateWithWhereUniqueWithoutAuthorInput>>;
    updateMany?: InputMaybe<Array<ReplyUpdateManyWithWhereWithoutAuthorInput>>;
    upsert?: InputMaybe<Array<ReplyUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type ReplyUpdateManyWithoutCommentInput = {
    connect?: InputMaybe<Array<ReplyWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<ReplyCreateOrConnectWithoutCommentInput>
    >;
    create?: InputMaybe<Array<ReplyCreateWithoutCommentInput>>;
    createMany?: InputMaybe<ReplyCreateManyCommentInputEnvelope>;
    delete?: InputMaybe<Array<ReplyWhereUniqueInput>>;
    deleteMany?: InputMaybe<Array<ReplyScalarWhereInput>>;
    disconnect?: InputMaybe<Array<ReplyWhereUniqueInput>>;
    set?: InputMaybe<Array<ReplyWhereUniqueInput>>;
    update?: InputMaybe<Array<ReplyUpdateWithWhereUniqueWithoutCommentInput>>;
    updateMany?: InputMaybe<Array<ReplyUpdateManyWithWhereWithoutCommentInput>>;
    upsert?: InputMaybe<Array<ReplyUpsertWithWhereUniqueWithoutCommentInput>>;
};

export type ReplyUpdateWithWhereUniqueWithoutAuthorInput = {
    data: ReplyUpdateWithoutAuthorInput;
    where: ReplyWhereUniqueInput;
};

export type ReplyUpdateWithWhereUniqueWithoutCommentInput = {
    data: ReplyUpdateWithoutCommentInput;
    where: ReplyWhereUniqueInput;
};

export type ReplyUpdateWithoutAuthorInput = {
    Comment?: InputMaybe<CommentUpdateOneRequiredWithoutReplyInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplyUpdateWithoutCommentInput = {
    author?: InputMaybe<UserUpdateOneRequiredWithoutReplyInput>;
    content?: InputMaybe<StringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplyUpsertWithWhereUniqueWithoutAuthorInput = {
    create: ReplyCreateWithoutAuthorInput;
    update: ReplyUpdateWithoutAuthorInput;
    where: ReplyWhereUniqueInput;
};

export type ReplyUpsertWithWhereUniqueWithoutCommentInput = {
    create: ReplyCreateWithoutCommentInput;
    update: ReplyUpdateWithoutCommentInput;
    where: ReplyWhereUniqueInput;
};

export type ReplyWhereInput = {
    AND?: InputMaybe<Array<ReplyWhereInput>>;
    Comment?: InputMaybe<CommentRelationFilter>;
    NOT?: InputMaybe<Array<ReplyWhereInput>>;
    OR?: InputMaybe<Array<ReplyWhereInput>>;
    author?: InputMaybe<UserRelationFilter>;
    commentId?: InputMaybe<StringFilter>;
    content?: InputMaybe<StringFilter>;
    created_at?: InputMaybe<DateTimeFilter>;
    id?: InputMaybe<StringFilter>;
    updated_at?: InputMaybe<DateTimeFilter>;
    userId?: InputMaybe<StringFilter>;
};

export type ReplyWhereUniqueInput = {
    id?: InputMaybe<Scalars["String"]>;
};

export type ResetPassword = {
    __typename?: "ResetPassword";
    id: Scalars["String"];
};

export type ResetPasswordCountAggregate = {
    __typename?: "ResetPasswordCountAggregate";
    _all: Scalars["Int"];
    created_at: Scalars["Int"];
    id: Scalars["Int"];
    token: Scalars["Int"];
    updated_at: Scalars["Int"];
    user_id: Scalars["Int"];
};

export type ResetPasswordCountOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
};

export type ResetPasswordCreateInput = {
    id?: InputMaybe<Scalars["String"]>;
};

export type ResetPasswordCreateManyInput = {
    id?: InputMaybe<Scalars["String"]>;
};

export type ResetPasswordCreateManyUserInput = {
    id?: InputMaybe<Scalars["String"]>;
};

export type ResetPasswordCreateManyUserInputEnvelope = {
    data: Array<ResetPasswordCreateManyUserInput>;
    skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ResetPasswordCreateNestedManyWithoutUserInput = {
    connect?: InputMaybe<Array<ResetPasswordWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
        Array<ResetPasswordCreateOrConnectWithoutUserInput>
    >;
    create?: InputMaybe<Array<ResetPasswordCreateWithoutUserInput>>;
    createMany?: InputMaybe<ResetPasswordCreateManyUserInputEnvelope>;
};

export type ResetPasswordCreateOrConnectWithoutUserInput = {
    create: ResetPasswordCreateWithoutUserInput;
    where: ResetPasswordWhereUniqueInput;
};

export type ResetPasswordCreateWithoutUserInput = {
    id?: InputMaybe<Scalars["String"]>;
};

export type ResetPasswordGroupBy = {
    __typename?: "ResetPasswordGroupBy";
    _count: Maybe<ResetPasswordCountAggregate>;
    _max: Maybe<ResetPasswordMaxAggregate>;
    _min: Maybe<ResetPasswordMinAggregate>;
    created_at: Scalars["DateTime"];
    id: Scalars["String"];
    token: Scalars["String"];
    updated_at: Scalars["DateTime"];
    user_id: Scalars["String"];
};

export type ResetPasswordListRelationFilter = {
    every?: InputMaybe<ResetPasswordWhereInput>;
    none?: InputMaybe<ResetPasswordWhereInput>;
    some?: InputMaybe<ResetPasswordWhereInput>;
};

export type ResetPasswordMaxAggregate = {
    __typename?: "ResetPasswordMaxAggregate";
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    token: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
    user_id: Maybe<Scalars["String"]>;
};

export type ResetPasswordMaxOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
};

export type ResetPasswordMinAggregate = {
    __typename?: "ResetPasswordMinAggregate";
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    token: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
    user_id: Maybe<Scalars["String"]>;
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
    CreatedAt = "created_at",
    Id = "id",
    Token = "token",
    UpdatedAt = "updated_at",
    UserId = "user_id",
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
    connectOrCreate?: InputMaybe<
        Array<ResetPasswordCreateOrConnectWithoutUserInput>
    >;
    create?: InputMaybe<Array<ResetPasswordCreateWithoutUserInput>>;
    createMany?: InputMaybe<ResetPasswordCreateManyUserInputEnvelope>;
    delete?: InputMaybe<Array<ResetPasswordWhereUniqueInput>>;
    deleteMany?: InputMaybe<Array<ResetPasswordScalarWhereInput>>;
    disconnect?: InputMaybe<Array<ResetPasswordWhereUniqueInput>>;
    set?: InputMaybe<Array<ResetPasswordWhereUniqueInput>>;
    update?: InputMaybe<
        Array<ResetPasswordUpdateWithWhereUniqueWithoutUserInput>
    >;
    updateMany?: InputMaybe<
        Array<ResetPasswordUpdateManyWithWhereWithoutUserInput>
    >;
    upsert?: InputMaybe<
        Array<ResetPasswordUpsertWithWhereUniqueWithoutUserInput>
    >;
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
    id?: InputMaybe<Scalars["String"]>;
};

export enum Role {
    Admin = "ADMIN",
    Manager = "MANAGER",
    SuperAdmin = "SUPER_ADMIN",
    User = "USER",
}

export enum SortOrder {
    Asc = "asc",
    Desc = "desc",
}

export type StringFieldUpdateOperationsInput = {
    set?: InputMaybe<Scalars["String"]>;
};

export type StringFilter = {
    contains?: InputMaybe<Scalars["String"]>;
    endsWith?: InputMaybe<Scalars["String"]>;
    equals?: InputMaybe<Scalars["String"]>;
    gt?: InputMaybe<Scalars["String"]>;
    gte?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<Scalars["String"]>>;
    lt?: InputMaybe<Scalars["String"]>;
    lte?: InputMaybe<Scalars["String"]>;
    mode?: InputMaybe<QueryMode>;
    not?: InputMaybe<NestedStringFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]>>;
    startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableFilter = {
    contains?: InputMaybe<Scalars["String"]>;
    endsWith?: InputMaybe<Scalars["String"]>;
    equals?: InputMaybe<Scalars["String"]>;
    gt?: InputMaybe<Scalars["String"]>;
    gte?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<Scalars["String"]>>;
    lt?: InputMaybe<Scalars["String"]>;
    lte?: InputMaybe<Scalars["String"]>;
    mode?: InputMaybe<QueryMode>;
    not?: InputMaybe<NestedStringNullableFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]>>;
    startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntNullableFilter>;
    _max?: InputMaybe<NestedStringNullableFilter>;
    _min?: InputMaybe<NestedStringNullableFilter>;
    contains?: InputMaybe<Scalars["String"]>;
    endsWith?: InputMaybe<Scalars["String"]>;
    equals?: InputMaybe<Scalars["String"]>;
    gt?: InputMaybe<Scalars["String"]>;
    gte?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<Scalars["String"]>>;
    lt?: InputMaybe<Scalars["String"]>;
    lte?: InputMaybe<Scalars["String"]>;
    mode?: InputMaybe<QueryMode>;
    not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]>>;
    startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringWithAggregatesFilter = {
    _count?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedStringFilter>;
    _min?: InputMaybe<NestedStringFilter>;
    contains?: InputMaybe<Scalars["String"]>;
    endsWith?: InputMaybe<Scalars["String"]>;
    equals?: InputMaybe<Scalars["String"]>;
    gt?: InputMaybe<Scalars["String"]>;
    gte?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<Scalars["String"]>>;
    lt?: InputMaybe<Scalars["String"]>;
    lte?: InputMaybe<Scalars["String"]>;
    mode?: InputMaybe<QueryMode>;
    not?: InputMaybe<NestedStringWithAggregatesFilter>;
    notIn?: InputMaybe<Array<Scalars["String"]>>;
    startsWith?: InputMaybe<Scalars["String"]>;
};

export type Tag = {
    __typename?: "Tag";
    Post: Array<Post>;
    _count: Maybe<TagCount>;
    created_at: Scalars["DateTime"];
    id: Scalars["String"];
    name: Scalars["String"];
    updated_at: Scalars["DateTime"];
};

export type TagPostArgs = {
    cursor: InputMaybe<PostWhereUniqueInput>;
    distinct: InputMaybe<Array<PostScalarFieldEnum>>;
    orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<PostWhereInput>;
};

export type TagCount = {
    __typename?: "TagCount";
    Post: Scalars["Int"];
};

export type TagCountAggregate = {
    __typename?: "TagCountAggregate";
    _all: Scalars["Int"];
    created_at: Scalars["Int"];
    id: Scalars["Int"];
    name: Scalars["Int"];
    updated_at: Scalars["Int"];
};

export type TagCountOrderByAggregateInput = {
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
};

export type TagCreateInput = {
    Post?: InputMaybe<PostCreateNestedManyWithoutTagsInput>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    name: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TagCreateManyInput = {
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    name: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
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
    created_at?: InputMaybe<Scalars["DateTime"]>;
    id?: InputMaybe<Scalars["String"]>;
    name: Scalars["String"];
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TagGroupBy = {
    __typename?: "TagGroupBy";
    _count: Maybe<TagCountAggregate>;
    _max: Maybe<TagMaxAggregate>;
    _min: Maybe<TagMinAggregate>;
    created_at: Scalars["DateTime"];
    id: Scalars["String"];
    name: Scalars["String"];
    updated_at: Scalars["DateTime"];
};

export type TagListRelationFilter = {
    every?: InputMaybe<TagWhereInput>;
    none?: InputMaybe<TagWhereInput>;
    some?: InputMaybe<TagWhereInput>;
};

export type TagMaxAggregate = {
    __typename?: "TagMaxAggregate";
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    name: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
};

export type TagMaxOrderByAggregateInput = {
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
};

export type TagMinAggregate = {
    __typename?: "TagMinAggregate";
    created_at: Maybe<Scalars["DateTime"]>;
    id: Maybe<Scalars["String"]>;
    name: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
};

export type TagMinOrderByAggregateInput = {
    created_at?: InputMaybe<SortOrder>;
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
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
    Post?: InputMaybe<PostOrderByRelationAggregateInput>;
    created_at?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
};

export enum TagScalarFieldEnum {
    CreatedAt = "created_at",
    Id = "id",
    Name = "name",
    UpdatedAt = "updated_at",
}

export type TagScalarWhereInput = {
    AND?: InputMaybe<Array<TagScalarWhereInput>>;
    NOT?: InputMaybe<Array<TagScalarWhereInput>>;
    OR?: InputMaybe<Array<TagScalarWhereInput>>;
    created_at?: InputMaybe<DateTimeFilter>;
    id?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    updated_at?: InputMaybe<DateTimeFilter>;
};

export type TagScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
    NOT?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
    OR?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
    created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
    id?: InputMaybe<StringWithAggregatesFilter>;
    name?: InputMaybe<StringWithAggregatesFilter>;
    updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TagUpdateInput = {
    Post?: InputMaybe<PostUpdateManyWithoutTagsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    name?: InputMaybe<StringFieldUpdateOperationsInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
    id?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    updated_at?: InputMaybe<DateTimeFilter>;
};

export type TagWhereUniqueInput = {
    id?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
};

export type User = {
    __typename?: "User";
    Comment: Array<Comment>;
    Post: Array<Post>;
    Reply: Array<Reply>;
    ResetPassword: Array<ResetPassword>;
    _count: Maybe<UserCount>;
    avatar: Maybe<Scalars["String"]>;
    created_at: Scalars["DateTime"];
    email: Scalars["String"];
    first_name: Maybe<Scalars["String"]>;
    id: Scalars["String"];
    is_disabled: Scalars["Boolean"];
    last_name: Maybe<Scalars["String"]>;
    nickname: Scalars["String"];
    role: Array<Role>;
    updated_at: Scalars["DateTime"];
};

export type UserCommentArgs = {
    cursor: InputMaybe<CommentWhereUniqueInput>;
    distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
    orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<CommentWhereInput>;
};

export type UserPostArgs = {
    cursor: InputMaybe<PostWhereUniqueInput>;
    distinct: InputMaybe<Array<PostScalarFieldEnum>>;
    orderBy: InputMaybe<Array<PostOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<PostWhereInput>;
};

export type UserReplyArgs = {
    cursor: InputMaybe<ReplyWhereUniqueInput>;
    distinct: InputMaybe<Array<ReplyScalarFieldEnum>>;
    orderBy: InputMaybe<Array<ReplyOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<ReplyWhereInput>;
};

export type UserResetPasswordArgs = {
    cursor: InputMaybe<ResetPasswordWhereUniqueInput>;
    distinct: InputMaybe<Array<ResetPasswordScalarFieldEnum>>;
    orderBy: InputMaybe<Array<ResetPasswordOrderByWithRelationInput>>;
    skip: InputMaybe<Scalars["Int"]>;
    take: InputMaybe<Scalars["Int"]>;
    where: InputMaybe<ResetPasswordWhereInput>;
};

export type UserCount = {
    __typename?: "UserCount";
    Comment: Scalars["Int"];
    Post: Scalars["Int"];
    Reply: Scalars["Int"];
    ResetPassword: Scalars["Int"];
};

export type UserCountAggregate = {
    __typename?: "UserCountAggregate";
    _all: Scalars["Int"];
    avatar: Scalars["Int"];
    created_at: Scalars["Int"];
    email: Scalars["Int"];
    first_name: Scalars["Int"];
    id: Scalars["Int"];
    is_disabled: Scalars["Int"];
    last_name: Scalars["Int"];
    nickname: Scalars["Int"];
    password: Scalars["Int"];
    role: Scalars["Int"];
    updated_at: Scalars["Int"];
};

export type UserCountOrderByAggregateInput = {
    avatar?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    email?: InputMaybe<SortOrder>;
    first_name?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    is_disabled?: InputMaybe<SortOrder>;
    last_name?: InputMaybe<SortOrder>;
    nickname?: InputMaybe<SortOrder>;
    password?: InputMaybe<SortOrder>;
    role?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
    Comment?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
    Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
    Reply?: InputMaybe<ReplyCreateNestedManyWithoutAuthorInput>;
    ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
    avatar?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    email: Scalars["String"];
    first_name?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["String"]>;
    is_disabled: Scalars["Boolean"];
    last_name?: InputMaybe<Scalars["String"]>;
    nickname: Scalars["String"];
    password: Scalars["String"];
    role?: InputMaybe<UserCreateroleInput>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateManyInput = {
    avatar?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    email: Scalars["String"];
    first_name?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["String"]>;
    is_disabled: Scalars["Boolean"];
    last_name?: InputMaybe<Scalars["String"]>;
    nickname: Scalars["String"];
    password: Scalars["String"];
    role?: InputMaybe<UserCreateroleInput>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
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

export type UserCreateNestedOneWithoutReplyInput = {
    connect?: InputMaybe<UserWhereUniqueInput>;
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReplyInput>;
    create?: InputMaybe<UserCreateWithoutReplyInput>;
};

export type UserCreateOrConnectWithoutCommentInput = {
    create: UserCreateWithoutCommentInput;
    where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostInput = {
    create: UserCreateWithoutPostInput;
    where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReplyInput = {
    create: UserCreateWithoutReplyInput;
    where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentInput = {
    Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
    Reply?: InputMaybe<ReplyCreateNestedManyWithoutAuthorInput>;
    ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
    avatar?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    email: Scalars["String"];
    first_name?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["String"]>;
    is_disabled: Scalars["Boolean"];
    last_name?: InputMaybe<Scalars["String"]>;
    nickname: Scalars["String"];
    password: Scalars["String"];
    role?: InputMaybe<UserCreateroleInput>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateWithoutPostInput = {
    Comment?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
    Reply?: InputMaybe<ReplyCreateNestedManyWithoutAuthorInput>;
    ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
    avatar?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    email: Scalars["String"];
    first_name?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["String"]>;
    is_disabled: Scalars["Boolean"];
    last_name?: InputMaybe<Scalars["String"]>;
    nickname: Scalars["String"];
    password: Scalars["String"];
    role?: InputMaybe<UserCreateroleInput>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateWithoutReplyInput = {
    Comment?: InputMaybe<CommentCreateNestedManyWithoutAuthorInput>;
    Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
    ResetPassword?: InputMaybe<ResetPasswordCreateNestedManyWithoutUserInput>;
    avatar?: InputMaybe<Scalars["String"]>;
    created_at?: InputMaybe<Scalars["DateTime"]>;
    email: Scalars["String"];
    first_name?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["String"]>;
    is_disabled: Scalars["Boolean"];
    last_name?: InputMaybe<Scalars["String"]>;
    nickname: Scalars["String"];
    password: Scalars["String"];
    role?: InputMaybe<UserCreateroleInput>;
    updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateroleInput = {
    set: Array<Role>;
};

export type UserGroupBy = {
    __typename?: "UserGroupBy";
    _count: Maybe<UserCountAggregate>;
    _max: Maybe<UserMaxAggregate>;
    _min: Maybe<UserMinAggregate>;
    avatar: Maybe<Scalars["String"]>;
    created_at: Scalars["DateTime"];
    email: Scalars["String"];
    first_name: Maybe<Scalars["String"]>;
    id: Scalars["String"];
    is_disabled: Scalars["Boolean"];
    last_name: Maybe<Scalars["String"]>;
    nickname: Scalars["String"];
    password: Scalars["String"];
    role: Maybe<Array<Role>>;
    updated_at: Scalars["DateTime"];
};

export type UserMaxAggregate = {
    __typename?: "UserMaxAggregate";
    avatar: Maybe<Scalars["String"]>;
    created_at: Maybe<Scalars["DateTime"]>;
    email: Maybe<Scalars["String"]>;
    first_name: Maybe<Scalars["String"]>;
    id: Maybe<Scalars["String"]>;
    is_disabled: Maybe<Scalars["Boolean"]>;
    last_name: Maybe<Scalars["String"]>;
    nickname: Maybe<Scalars["String"]>;
    password: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
};

export type UserMaxOrderByAggregateInput = {
    avatar?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    email?: InputMaybe<SortOrder>;
    first_name?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    is_disabled?: InputMaybe<SortOrder>;
    last_name?: InputMaybe<SortOrder>;
    nickname?: InputMaybe<SortOrder>;
    password?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
    __typename?: "UserMinAggregate";
    avatar: Maybe<Scalars["String"]>;
    created_at: Maybe<Scalars["DateTime"]>;
    email: Maybe<Scalars["String"]>;
    first_name: Maybe<Scalars["String"]>;
    id: Maybe<Scalars["String"]>;
    is_disabled: Maybe<Scalars["Boolean"]>;
    last_name: Maybe<Scalars["String"]>;
    nickname: Maybe<Scalars["String"]>;
    password: Maybe<Scalars["String"]>;
    updated_at: Maybe<Scalars["DateTime"]>;
};

export type UserMinOrderByAggregateInput = {
    avatar?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    email?: InputMaybe<SortOrder>;
    first_name?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    is_disabled?: InputMaybe<SortOrder>;
    last_name?: InputMaybe<SortOrder>;
    nickname?: InputMaybe<SortOrder>;
    password?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
    _count?: InputMaybe<UserCountOrderByAggregateInput>;
    _max?: InputMaybe<UserMaxOrderByAggregateInput>;
    _min?: InputMaybe<UserMinOrderByAggregateInput>;
    avatar?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    email?: InputMaybe<SortOrder>;
    first_name?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    is_disabled?: InputMaybe<SortOrder>;
    last_name?: InputMaybe<SortOrder>;
    nickname?: InputMaybe<SortOrder>;
    password?: InputMaybe<SortOrder>;
    role?: InputMaybe<SortOrder>;
    updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
    Comment?: InputMaybe<CommentOrderByRelationAggregateInput>;
    Post?: InputMaybe<PostOrderByRelationAggregateInput>;
    Reply?: InputMaybe<ReplyOrderByRelationAggregateInput>;
    ResetPassword?: InputMaybe<ResetPasswordOrderByRelationAggregateInput>;
    avatar?: InputMaybe<SortOrder>;
    created_at?: InputMaybe<SortOrder>;
    email?: InputMaybe<SortOrder>;
    first_name?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    is_disabled?: InputMaybe<SortOrder>;
    last_name?: InputMaybe<SortOrder>;
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
    Avatar = "avatar",
    CreatedAt = "created_at",
    Email = "email",
    FirstName = "first_name",
    Id = "id",
    IsDisabled = "is_disabled",
    LastName = "last_name",
    Nickname = "nickname",
    Password = "password",
    Role = "role",
    UpdatedAt = "updated_at",
}

export type UserScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
    NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
    OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
    avatar?: InputMaybe<StringNullableWithAggregatesFilter>;
    created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
    email?: InputMaybe<StringWithAggregatesFilter>;
    first_name?: InputMaybe<StringNullableWithAggregatesFilter>;
    id?: InputMaybe<StringWithAggregatesFilter>;
    is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
    last_name?: InputMaybe<StringNullableWithAggregatesFilter>;
    nickname?: InputMaybe<StringWithAggregatesFilter>;
    password?: InputMaybe<StringWithAggregatesFilter>;
    role?: InputMaybe<EnumRoleNullableListFilter>;
    updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
    Comment?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
    Post?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
    Reply?: InputMaybe<ReplyUpdateManyWithoutAuthorInput>;
    ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
    avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    email?: InputMaybe<StringFieldUpdateOperationsInput>;
    first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
    last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    nickname?: InputMaybe<StringFieldUpdateOperationsInput>;
    password?: InputMaybe<StringFieldUpdateOperationsInput>;
    role?: InputMaybe<UserUpdateroleInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
    avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    email?: InputMaybe<StringFieldUpdateOperationsInput>;
    first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
    last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    nickname?: InputMaybe<StringFieldUpdateOperationsInput>;
    password?: InputMaybe<StringFieldUpdateOperationsInput>;
    role?: InputMaybe<UserUpdateroleInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type UserUpdateOneRequiredWithoutReplyInput = {
    connect?: InputMaybe<UserWhereUniqueInput>;
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReplyInput>;
    create?: InputMaybe<UserCreateWithoutReplyInput>;
    update?: InputMaybe<UserUpdateWithoutReplyInput>;
    upsert?: InputMaybe<UserUpsertWithoutReplyInput>;
};

export type UserUpdateWithoutCommentInput = {
    Post?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
    Reply?: InputMaybe<ReplyUpdateManyWithoutAuthorInput>;
    ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
    avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    email?: InputMaybe<StringFieldUpdateOperationsInput>;
    first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
    last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    nickname?: InputMaybe<StringFieldUpdateOperationsInput>;
    password?: InputMaybe<StringFieldUpdateOperationsInput>;
    role?: InputMaybe<UserUpdateroleInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPostInput = {
    Comment?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
    Reply?: InputMaybe<ReplyUpdateManyWithoutAuthorInput>;
    ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
    avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    email?: InputMaybe<StringFieldUpdateOperationsInput>;
    first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
    last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    nickname?: InputMaybe<StringFieldUpdateOperationsInput>;
    password?: InputMaybe<StringFieldUpdateOperationsInput>;
    role?: InputMaybe<UserUpdateroleInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutReplyInput = {
    Comment?: InputMaybe<CommentUpdateManyWithoutAuthorInput>;
    Post?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
    ResetPassword?: InputMaybe<ResetPasswordUpdateManyWithoutUserInput>;
    avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
    email?: InputMaybe<StringFieldUpdateOperationsInput>;
    first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    id?: InputMaybe<StringFieldUpdateOperationsInput>;
    is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
    last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    nickname?: InputMaybe<StringFieldUpdateOperationsInput>;
    password?: InputMaybe<StringFieldUpdateOperationsInput>;
    role?: InputMaybe<UserUpdateroleInput>;
    updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateroleInput = {
    push?: InputMaybe<Array<Role>>;
    set?: InputMaybe<Array<Role>>;
};

export type UserUpsertWithoutCommentInput = {
    create: UserCreateWithoutCommentInput;
    update: UserUpdateWithoutCommentInput;
};

export type UserUpsertWithoutPostInput = {
    create: UserCreateWithoutPostInput;
    update: UserUpdateWithoutPostInput;
};

export type UserUpsertWithoutReplyInput = {
    create: UserCreateWithoutReplyInput;
    update: UserUpdateWithoutReplyInput;
};

export type UserWhereInput = {
    AND?: InputMaybe<Array<UserWhereInput>>;
    Comment?: InputMaybe<CommentListRelationFilter>;
    NOT?: InputMaybe<Array<UserWhereInput>>;
    OR?: InputMaybe<Array<UserWhereInput>>;
    Post?: InputMaybe<PostListRelationFilter>;
    Reply?: InputMaybe<ReplyListRelationFilter>;
    ResetPassword?: InputMaybe<ResetPasswordListRelationFilter>;
    avatar?: InputMaybe<StringNullableFilter>;
    created_at?: InputMaybe<DateTimeFilter>;
    email?: InputMaybe<StringFilter>;
    first_name?: InputMaybe<StringNullableFilter>;
    id?: InputMaybe<StringFilter>;
    is_disabled?: InputMaybe<BoolFilter>;
    last_name?: InputMaybe<StringNullableFilter>;
    nickname?: InputMaybe<StringFilter>;
    password?: InputMaybe<StringFilter>;
    role?: InputMaybe<EnumRoleNullableListFilter>;
    updated_at?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
    email?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["String"]>;
    nickname?: InputMaybe<Scalars["String"]>;
};

export type UserFragment = {
    __typename?: "User";
    id: string;
    nickname: string;
    email: string;
    avatar: string;
    role: Array<Role>;
};

export type CreatePostMutationVariables = Exact<{
    data: PostCreateInput;
}>;

export type CreatePostMutation = {
    __typename?: "Mutation";
    createPost: { __typename?: "Post"; id: string; slug: string };
};

export type MutateLoginMutationVariables = Exact<{
    data: LoginInput;
}>;

export type MutateLoginMutation = {
    __typename?: "Mutation";
    login: {
        __typename?: "User";
        id: string;
        nickname: string;
        email: string;
        avatar: string;
        role: Array<Role>;
    };
};

export type MutateMeMutationVariables = Exact<{ [key: string]: never }>;

export type MutateMeMutation = {
    __typename?: "Mutation";
    me: {
        __typename?: "User";
        id: string;
        nickname: string;
        email: string;
        avatar: string;
        role: Array<Role>;
    };
};

export type RegisterMutationVariables = Exact<{
    data: RegisterInput;
}>;

export type RegisterMutation = {
    __typename?: "Mutation";
    register: {
        __typename?: "User";
        id: string;
        nickname: string;
        email: string;
        avatar: string;
        role: Array<Role>;
    };
};

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCategoriesQuery = {
    __typename?: "Query";
    categories: Array<{ __typename?: "Category"; id: string; name: string }>;
};

export type GetAllPostsQueryVariables = Exact<{
    where: PostWhereInput;
    orderBy: InputMaybe<
        Array<PostOrderByWithRelationInput> | PostOrderByWithRelationInput
    >;
}>;

export type GetAllPostsQuery = {
    __typename?: "Query";
    posts: Array<{
        __typename?: "Post";
        id: string;
        title: string;
        content: string;
        isDraft: boolean;
        slug: string;
        created_at: any;
        userId: string;
        categoryId: string;
        author: {
            __typename?: "User";
            id: string;
            first_name: string;
            last_name: string;
            email: string;
            avatar: string;
        };
        Category: { __typename?: "Category"; id: string; name: string };
        Tags: Array<{ __typename?: "Tag"; id: string; name: string }>;
    }>;
};

export type GetPostDataQueryVariables = Exact<{
    where: PostWhereUniqueInput;
}>;

export type GetPostDataQuery = {
    __typename?: "Query";
    post: {
        __typename?: "Post";
        id: string;
        slug: string;
        title: string;
        content: string;
        cover_picture: string;
        isDraft: boolean;
        author: {
            __typename?: "User";
            id: string;
            first_name: string;
            last_name: string;
            email: string;
            avatar: string;
        };
        Tags: Array<{ __typename?: "Tag"; id: string; name: string }>;
    };
};

export const UserFragmentDoc = gql`
    fragment User on User {
        id
        nickname
        email
        avatar
        role
    }
`;
export const CreatePostDocument = gql`
    mutation CreatePost($data: PostCreateInput!) {
        createPost(data: $data) {
            id
            slug
        }
    }
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
    CreatePostMutation,
    CreatePostMutationVariables
>;

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
export function useCreatePostMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreatePostMutation,
        CreatePostMutationVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
        CreatePostDocument,
        options,
    );
}
export type CreatePostMutationHookResult = ReturnType<
    typeof useCreatePostMutation
>;
export type CreatePostMutationResult =
    Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
    CreatePostMutation,
    CreatePostMutationVariables
>;
export const MutateLoginDocument = gql`
    mutation MutateLogin($data: LoginInput!) {
        login(data: $data) {
            ...User
        }
    }
    ${UserFragmentDoc}
`;
export type MutateLoginMutationFn = Apollo.MutationFunction<
    MutateLoginMutation,
    MutateLoginMutationVariables
>;

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
export function useMutateLoginMutation(
    baseOptions?: Apollo.MutationHookOptions<
        MutateLoginMutation,
        MutateLoginMutationVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        MutateLoginMutation,
        MutateLoginMutationVariables
    >(MutateLoginDocument, options);
}
export type MutateLoginMutationHookResult = ReturnType<
    typeof useMutateLoginMutation
>;
export type MutateLoginMutationResult =
    Apollo.MutationResult<MutateLoginMutation>;
export type MutateLoginMutationOptions = Apollo.BaseMutationOptions<
    MutateLoginMutation,
    MutateLoginMutationVariables
>;
export const MutateMeDocument = gql`
    mutation MutateMe {
        me {
            ...User
        }
    }
    ${UserFragmentDoc}
`;
export type MutateMeMutationFn = Apollo.MutationFunction<
    MutateMeMutation,
    MutateMeMutationVariables
>;

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
export function useMutateMeMutation(
    baseOptions?: Apollo.MutationHookOptions<
        MutateMeMutation,
        MutateMeMutationVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<MutateMeMutation, MutateMeMutationVariables>(
        MutateMeDocument,
        options,
    );
}
export type MutateMeMutationHookResult = ReturnType<typeof useMutateMeMutation>;
export type MutateMeMutationResult = Apollo.MutationResult<MutateMeMutation>;
export type MutateMeMutationOptions = Apollo.BaseMutationOptions<
    MutateMeMutation,
    MutateMeMutationVariables
>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
        register(data: $data) {
            ...User
        }
    }
    ${UserFragmentDoc}
`;
export type RegisterMutationFn = Apollo.MutationFunction<
    RegisterMutation,
    RegisterMutationVariables
>;

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
export function useRegisterMutation(
    baseOptions?: Apollo.MutationHookOptions<
        RegisterMutation,
        RegisterMutationVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
        RegisterDocument,
        options,
    );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
    RegisterMutation,
    RegisterMutationVariables
>;
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
export function useGetAllCategoriesQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetAllCategoriesQuery,
        GetAllCategoriesQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        GetAllCategoriesQuery,
        GetAllCategoriesQueryVariables
    >(GetAllCategoriesDocument, options);
}
export function useGetAllCategoriesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetAllCategoriesQuery,
        GetAllCategoriesQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetAllCategoriesQuery,
        GetAllCategoriesQueryVariables
    >(GetAllCategoriesDocument, options);
}
export type GetAllCategoriesQueryHookResult = ReturnType<
    typeof useGetAllCategoriesQuery
>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<
    typeof useGetAllCategoriesLazyQuery
>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<
    GetAllCategoriesQuery,
    GetAllCategoriesQueryVariables
>;
export const GetAllPostsDocument = gql`
    query GetAllPosts(
        $where: PostWhereInput!
        $orderBy: [PostOrderByWithRelationInput!]
    ) {
        posts(where: $where, orderBy: $orderBy) {
            id
            title
            content
            isDraft
            slug
            created_at
            author {
                id
                first_name
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
 *   },
 * });
 */
export function useGetAllPostsQuery(
    baseOptions: Apollo.QueryHookOptions<
        GetAllPostsQuery,
        GetAllPostsQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(
        GetAllPostsDocument,
        options,
    );
}
export function useGetAllPostsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetAllPostsQuery,
        GetAllPostsQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(
        GetAllPostsDocument,
        options,
    );
}
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<
    typeof useGetAllPostsLazyQuery
>;
export type GetAllPostsQueryResult = Apollo.QueryResult<
    GetAllPostsQuery,
    GetAllPostsQueryVariables
>;
export const GetPostDataDocument = gql`
    query GetPostData($where: PostWhereUniqueInput!) {
        post(where: $where) {
            id
            slug
            title
            content
            cover_picture
            isDraft
            author {
                id
                first_name
                last_name
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
export function useGetPostDataQuery(
    baseOptions: Apollo.QueryHookOptions<
        GetPostDataQuery,
        GetPostDataQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPostDataQuery, GetPostDataQueryVariables>(
        GetPostDataDocument,
        options,
    );
}
export function useGetPostDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetPostDataQuery,
        GetPostDataQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPostDataQuery, GetPostDataQueryVariables>(
        GetPostDataDocument,
        options,
    );
}
export type GetPostDataQueryHookResult = ReturnType<typeof useGetPostDataQuery>;
export type GetPostDataLazyQueryHookResult = ReturnType<
    typeof useGetPostDataLazyQuery
>;
export type GetPostDataQueryResult = Apollo.QueryResult<
    GetPostDataQuery,
    GetPostDataQueryVariables
>;
