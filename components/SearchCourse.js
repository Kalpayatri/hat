import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Divider,
  Box,
  Paper,
} from "@mui/material";
import NavBar from "./NavBar";
import axios from "axios";

const durations = [
  { value: "1st-semesters", label: "1st Semesters" },
  { value: "1-months", label: "1 Month" },
  { value: "10-semesters", label: "10 Semesters" },
  { value: "10-trimsters", label: "10 Trimsters" },
  { value: "10-months", label: "10 Months" },
  { value: "11-semesters", label: "11 Semesters" },
  { value: "11-trimsters", label: "11 Trimsters" },
];

const SearchCourse = () => {
  const initialFilters = {
    numberOfItems: 10,
    universityName: "",
    courseName: "",
    courseType: "",
    teachingLanguage: "",
    beginningSemester: "",
    duration: "",
    germanyRanking: "",
    tuitionFeeMin: 0,
    tuitionFeeMax: 12500,
  };
  const [universities, setUniversities] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [universityName, setUniversityName] = useState(false);

  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("/api/universities");
        setUniversities(response.data.data);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchUniversities();
  }, []);

  const handleChangeFilters = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    setUniversityName(false);
    if (!filters.universityName) {
      setUniversityName(true);
      return;
    }
    const filteredResults = universities.filter((university) => {
      return university.universityName
        .toLowerCase()
        .includes(filters.universityName.toLowerCase());
    });
    setSearchResults(filteredResults);
  };

  return (
    <>
      <NavBar />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box width={280} marginRight={6} mt={5}>
          <Typography variant="h6">Filters</Typography>
          <Box marginTop={2}>
            <Typography variant="subtitle1">Number of Items</Typography>
            <FormControl fullWidth variant="outlined">
              <Select
                value={filters.numberOfItems}
                onChange={handleChangeFilters}
                label="Number of Items"
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider style={{ margin: "20px 0" }} />
          <Box marginTop={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="University Name"
              name="universityName"
              value={filters.universityName}
              onChange={handleChangeFilters}
              error={universityName}
              helperText={universityName ? "Please fill in this field" : ""}
            />
          </Box>
          <Box marginTop={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Course Name"
              name="courseName"
              value={filters.courseName}
              onChange={handleChangeFilters}
            />
          </Box>
          <Box marginTop={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="German Ranking"
              name="germanyRanking"
              value={filters.germanyRanking}
              onChange={handleChangeFilters}
            />
          </Box>
          <Box marginTop={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="course-type-label">Course Type</InputLabel>
              <Select
                labelId="course-type-label"
                label="Course Type"
                name="courseType"
                MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
                value={filters.courseType}
                onChange={handleChangeFilters}
              >
                <MenuItem value="bachelor">Bachelor</MenuItem>
                <MenuItem value="church-exam">Church Exam</MenuItem>
                <MenuItem value="diploma">Diploma</MenuItem>
                <MenuItem value="double-degree">Double Degree</MenuItem>
                <MenuItem value="la">LA</MenuItem>
                <MenuItem value="masters">Masters</MenuItem>
                <MenuItem value="other">Other</MenuItem>
                <MenuItem value="phd-doctorate">Phd/Doctorate</MenuItem>
                <MenuItem value="state-exam">State Exam</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box marginTop={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="teaching-language-label">
                Teaching Language
              </InputLabel>
              <Select
                labelId="teaching-language-label"
                label="Teaching Language"
                name="teachingLanguage"
                value={filters.teachingLanguage}
                onChange={handleChangeFilters}
                MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
              >
                <MenuItem value="arabic">ARABIC</MenuItem>
                <MenuItem value="chinese">CHINESE</MenuItem>
                <MenuItem value="danish">DANISH</MenuItem>
                <MenuItem value="dutch">DUTCH</MenuItem>
                <MenuItem value="english">ENGLISH</MenuItem>
                <MenuItem value="finnish">FINNISH</MenuItem>
                <MenuItem value="french">FRENCH</MenuItem>
                <MenuItem value="german">GERMAN</MenuItem>
                <MenuItem value="indonesian">INDONESIAN</MenuItem>
                <MenuItem value="italian">ITALIAN</MenuItem>
                <MenuItem value="japanese">JAPANESE</MenuItem>
                <MenuItem value="latin">LATIN</MenuItem>
                <MenuItem value="other">OTHER</MenuItem>
                <MenuItem value="polish">POLISH</MenuItem>
                <MenuItem value="portuguese">PORTUGUESE</MenuItem>
                <MenuItem value="romanic">ROMANIC</MenuItem>
                <MenuItem value="russian">RUSSIAN</MenuItem>
                <MenuItem value="scandinavian">SCANDINAVIAN</MenuItem>
                <MenuItem value="slevic">SLEVIC</MenuItem>
                <MenuItem value="turkish">TURKISH</MenuItem>
                <MenuItem value="yiddish">YIDDISH</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box marginTop={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="beginning-semester">
                Beginning Semester
              </InputLabel>
              <Select
                labelId="beginning-semester"
                label="Beginning Semester"
                name="beginningSemester"
                value={filters.beginningSemester}
                onChange={handleChangeFilters}
                MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
              >
                <MenuItem value="all-quarters">ALL QUARTERS</MenuItem>
                <MenuItem value="all-trimesters">ALL TRIMESTERS</MenuItem>
                <MenuItem value="any-time">ANY TIME</MenuItem>
                <MenuItem value="autumn">AUTUMN</MenuItem>
                <MenuItem value="autumn-quarter">AUTUMN QUARTER</MenuItem>
                <MenuItem value="autumn-trimester">AUTUMN TRIMESTER</MenuItem>
                <MenuItem value="january">JANUARY</MenuItem>
                <MenuItem value="na">N/A</MenuItem>
                <MenuItem value="other">OTHER</MenuItem>
                <MenuItem value="spring-quarter">SPRING QUARTER</MenuItem>
                <MenuItem value="spring-trimester">SPRING TRIMESTER</MenuItem>
                <MenuItem value="summer">SUMMER</MenuItem>
                <MenuItem value="summer-quarter">SUMMER QUARTER</MenuItem>
                <MenuItem value="winter">WINTER</MenuItem>
                <MenuItem value="winter-quarter">WINTER QUARTER</MenuItem>
                <MenuItem value="winter-quarter">WINTER TRIMESTE</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box marginTop={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="course-type-label">Duration</InputLabel>
              <Select
                labelId="course-type-label"
                label="Duration"
                name="duration"
                value={filters.duration}
                onChange={handleChangeFilters}
                MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
              >
                {durations.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box marginTop={2}>
            <Typography variant="subtitle1">Tuition Fee</Typography>
            <Box display="flex">
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                name="tuitionFee"
                value={filters.tuitionFee}
                onChange={handleChangeFilters}
                inputProps={{ min: 0, max: 12500, step: 1 }}
                defaultValue={0}
                style={{ marginRight: "8px" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                inputProps={{ min: 0, max: 12500, step: 1 }}
                defaultValue={12500}
              />
            </Box>
          </Box>

          <Box marginTop={2}>
            <Button
              variant="contained"
              sx={{ background: "#343a40" }}
              fullWidth
              onClick={handleResetFilters}
            >
              Reset Filters
            </Button>
          </Box>
          <Box marginTop={2}>
            <Button
              variant="contained"
              sx={{ background: "#6c757d" }}
              fullWidth
              onClick={handleSearch}
            >
              German Grade Calculator
            </Button>
          </Box>
          <Box marginTop={2}>
            <Button
              variant="contained"
              sx={{ background: "#6c757d" }}
              fullWidth
              onClick={handleSearch}
            >
              ECTS Calculator
            </Button>
          </Box>
        </Box>

        <Box>
          <Paper
            elevation={3}
            style={{ padding: 20, margin: 10, background: "#dee2e6 " }}
          >
            <Typography variant="h6">Search Results</Typography>
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((course) => (
                  <li key={course._id}>
                    <Typography variant="h6">
                      University Name: {course.universityName}
                    </Typography>
                    <Typography variant="body1" color="#007bff">
                      World Ranking: {course.worldRanking}
                    </Typography>
                    <Typography variant="body1" color="#007bff">
                      Germany Ranking: {course.germanyRanking}
                    </Typography>
                    <Typography variant="body1">
                      Location: {course.location}
                    </Typography>
                    <Typography variant="body1">
                      State: {course.state}
                    </Typography>
                    <Typography variant="body1">
                      Course Type: {course.courseType}
                    </Typography>
                    <Typography variant="body1">
                      Course Name: {course.courseName}
                    </Typography>
                    <Typography variant="body1">
                      Beginning Semester: {course.beginningSemester}
                    </Typography>
                    <Typography variant="body1" color="#28a745">
                      Duration: {course.duration}
                    </Typography>
                    <Typography variant="body1" color="#28a745">
                      Teaching Language: {course.teachingLanguage}
                    </Typography>
                    <Typography variant="body1">
                      German Grade Requirement: {course.germanGradeRequirement}
                    </Typography>
                    <Typography variant="body1">
                      Tuition Fee: {course.tuitionFee}
                    </Typography>
                    <Typography variant="body1">
                      Last Updated: {course.lastUpdated}
                    </Typography>
                  </li>
                ))}
              </ul>
            ) : (
              <Typography variant="body1">No search results found</Typography>
            )}
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default SearchCourse;
