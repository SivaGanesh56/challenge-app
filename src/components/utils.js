export const API = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json';

// adding unique id to each item
export function rebuildData(data) {
    data.forEach((_, index) => {
        data[index].id = uuidv4();
    })
}

// reference: https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}