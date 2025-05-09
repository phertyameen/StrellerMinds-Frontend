import { CourseCard } from "@/components/CourseCard"
import { allCourses } from "@/lib/course-data"

export default function CoursesPage() {
  return (
    <main className="container mx-auto py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">All Courses</h1>
        <p className="text-gray-500 dark:text-gray-400">Browse our complete catalog of blockchain courses</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </main>
  )
}

