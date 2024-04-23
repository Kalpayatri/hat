import University from '../../models/University';
import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const universities = await University.find();
      res.status(200).json({ success: true, data: universities });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const {
        universityName,
        courseName,
        courseType,
        worldRanking,
        germanyRanking,
        location,
        state,
        beginningSemester,
        duration,
        teachingLanguage,
        germanGradeRequirement,
        tuitionFee,
        applicationDeadlines,
        lastUpdated,
      } = req.body;

      const newUniversity = new University({
        universityName,
        courseName,
        courseType,
        worldRanking,
        germanyRanking,
        location,
        state,
        beginningSemester,
        duration,
        teachingLanguage,
        germanGradeRequirement,
        tuitionFee,
        applicationDeadlines,
        lastUpdated,
      });

      const savedUniversity = await newUniversity.save();

      res.status(201).json({ success: true, data: savedUniversity });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
