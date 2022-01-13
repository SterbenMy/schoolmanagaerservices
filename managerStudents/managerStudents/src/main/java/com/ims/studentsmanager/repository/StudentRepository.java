package com.ims.studentsmanager.repository;

import com.ims.studentsmanager.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findStudentById(Long id);
}
