export const getWidth = (element = undefined) => {
  if (element !== undefined) {
    return element.innerWidth;
  }

  if (self.innerWidth) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}

export const getHeight = (element = undefined) => {
  if (element !== undefined) {
    return element.innerHeight;
  }

  if (self.innerHeight) {
    return self.innerHeight;
  }

  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientHeight;
  }

  if (document.body) {
    return document.body.clientHeight;
  }
}
