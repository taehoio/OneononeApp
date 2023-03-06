export const onRequestHead: PagesFunction = async context => {
  return new Response();
};

export const onRequestGet: PagesFunction = async context => {
  return Response.json({status: 'OK'});
};
