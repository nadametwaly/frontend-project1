class Course {
  title;
  description;
  content;
  perquisittes;
  instructor;
  duration;
  fees;
  constructor(
    title,
    image,
    description,
    content,
    perquisittes,
    instructor,
    duration,
    fees,
  ) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.content = content;
    this.perquisittes = perquisittes;
    this.instructor = instructor;
    this.duration = duration;
    this.fees = fees;
  }
}

export default Course;
