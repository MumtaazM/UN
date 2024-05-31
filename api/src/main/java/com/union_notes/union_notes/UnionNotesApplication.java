package com.union_notes.union_notes;

// import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UnionNotesApplication {
	// @Autowired
	// private Flyway flyway;

	public static void main(String[] args) {
		SpringApplication.run(UnionNotesApplication.class, args);
	}

	// @Override
	// public void run(String... args) throws Exception {
	// 	flyway.clean();
	// 	flyway.migrate();
	// }
}
