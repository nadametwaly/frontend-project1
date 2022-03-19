class Course {
  id;
  title;
  description;
  content;
  perquisittes;
  instructor;
  duration;
  feeds;
  constructor(
    id,
    title,
    image,
    description,
    content,
    perquisittes,
    instructor,
    duration,
    feeds,
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.content = content;
    this.perquisittes = perquisittes;
    this.instructor = instructor;
    this.duration = duration;
    this.feeds = feeds;
  }
}

export default Course;
