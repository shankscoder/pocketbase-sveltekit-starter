import { client } from "$lib/pocketbase";
import type { PageLoad } from "./$types";

export const load: PageLoad = async function ({ params: { slug: id } }) {
  const post = await client.records.getOne('posts', id);

  return {
    post,
  }
}