export default {
    getImageUrl(obj){
        return obj?.fields?.file?.url ? obj.fields.file.url : '';
      },
}

