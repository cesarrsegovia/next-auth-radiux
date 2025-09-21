export funtion delete(request: Request, {params}: {params: {id: string}}){
    return new Response(`Proyecto eliminado ${params.id}`);
}