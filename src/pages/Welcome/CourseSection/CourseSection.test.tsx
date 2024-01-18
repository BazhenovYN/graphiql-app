import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CourseSection } from './CourseSection';

describe('Course Section tests', () => {
  test('Must contain headings elements', () => {
    const { getByTestId } = render(<CourseSection />, { wrapper: MemoryRouter });
    const courseSectionHeading = getByTestId('course-section-heading');
    const courseSectionSubheading = getByTestId('course-section-subheading');
    expect(courseSectionHeading).toBeInTheDocument();
    expect(courseSectionSubheading).toBeInTheDocument();
  });
});
