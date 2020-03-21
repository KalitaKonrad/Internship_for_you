package com.krdkta.internship_for_you.repository;

import com.krdkta.internship_for_you.model.Employer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Employer, Long> {}
