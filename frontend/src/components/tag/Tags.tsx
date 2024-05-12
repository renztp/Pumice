import React from 'react'
import Tag from './Tag';
import { TagsProps } from './tag'
import { IoMdClose } from "react-icons/io";

export default function Tags({tags, tagAction}: TagsProps | Element) {
  return tags.map((tag) => <Tag tag={tag} tagAction={tagAction} />)
}

