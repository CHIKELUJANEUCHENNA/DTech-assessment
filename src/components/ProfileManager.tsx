import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import styled from "styled-components";
import TextInput from "./TextInput";
import FileInput from "./FileInput";
import { ProfileData } from "../types/index";

const FormContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const DateSction = styled.div`
display: flex;
justify-content: space-between;
width: 80%;
flex-wrap: wrap;
`
const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddButton = styled.button`
  width: 200px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const defaultValues: ProfileData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  experiences: [
    { role: "", company: "", startDate: "", endDate: "" },
  ],
  skills: [
    { name: "" },
  ],
  resume: null,
};

const ProfileManager: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<ProfileData>({
    defaultValues,
    mode: "onChange",
  });

  const { fields: experienceFields, append: addExperience } = useFieldArray({
    control,
    name: "experiences",
  });

  const { fields: skillFields, append: addSkill } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (data: ProfileData) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Personal Information</h2>
        <SectionTitle>Personal Information</SectionTitle>
        <Controller
          control={control}
          name="personalInfo.firstName"
          rules={{ required: "First name is required" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="First Name"
              placeholder="Enter your first name"
              type="text"
              onChange={onChange}
              value={value}
              error={errors.personalInfo?.firstName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="personalInfo.lastName"
          rules={{ required: "Last name is required" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Last Name"
              placeholder="Enter your last name"
              type="text"
              onChange={onChange}
              value={value}
              error={errors.personalInfo?.lastName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="personalInfo.email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Email"
              placeholder="Enter your email"
              type="email"
              onChange={onChange}
              value={value}
              error={errors.personalInfo?.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="personalInfo.phone"
          rules={{ required: "Phone number is required" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Phone"
              placeholder="Enter your phone number"
              type="text"
              onChange={onChange}
              value={value}
              error={errors.personalInfo?.phone?.message}
            />
          )}
        />

        <h2>Professional Experiences</h2>
        {experienceFields.map((field, index) => (
          <div key={field.id}>
            <Controller
              control={control}
              name={`experiences.${index}.role`}
              rules={{ required: "Role is required" }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Role"
                  placeholder="Enter your role"
                  type="text"
                  onChange={onChange}
                  value={value}
                  error={errors.experiences?.[index]?.role?.message}
                />
              )}
            />
            <Controller
              control={control}
              name={`experiences.${index}.company`}
              rules={{ required: "Company is required" }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Company"
                  placeholder="Enter the company"
                  type="text"
                  onChange={onChange}
                  value={value}
                  error={errors.experiences?.[index]?.company?.message}
                />
              )}
            />
            <DateSction>
              <Controller
                control={control}
                name={`experiences.${index}.startDate`}
                rules={{ required: "Start date is required" }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    label="Start Date"
                    placeholder="Enter start date"
                    type="date"
                    onChange={onChange}
                    value={value}
                    error={errors.experiences?.[index]?.startDate?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name={`experiences.${index}.endDate`}
                rules={{ required: "End date is required" }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    label="End Date"
                    placeholder="Enter end date"
                    type="date"
                    onChange={onChange}
                    value={value}
                    error={errors.experiences?.[index]?.endDate?.message}
                  />
                )}
              />
            </DateSction>
          </div>
        ))}
        <AddButton
          type="button"
          onClick={() =>
            addExperience({ role: "", company: "", startDate: "", endDate: "" })
          }
        >
          Add Experience
        </AddButton>

        <h2>Skills</h2>
        {skillFields.map((field, index) => (
          <div key={field.id}>
            <Controller
              control={control}
              name={`skills.${index}.name`}
              rules={{ required: "Skill name is required" }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Skill"
                  placeholder="Enter a skill"
                  type="text"
                  onChange={onChange}
                  value={value}
                  error={errors.skills?.[index]?.name?.message}
                />
              )}
            />
          </div>
        ))}
        <AddButton type="button" onClick={() => addSkill({ name: "" })}>
          Add Skill
        </AddButton>

        <h2>Resume</h2>
        <Controller
          control={control}
          name="resume"
          rules={{
            required: "Resume is required",
            validate: {
              fileSize: (value) => {
                if (!value) return "File is required";

                return (
                  value.size <= 2 * 1024 * 1024 ||
                  "File size should be less than 2MB"
                );
              },
              fileType: (value) => {
                if (!value) return "File is required";

                return (
                  [
                    "application/pdf",
                    "application/msword",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  ].includes(value.type) ||
                  "Only PDF and Word documents are accepted"
                );
              },
            },
          }}
          render={({ field: { onChange } }) => (
            <FileInput
              label="Resume"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0] || null; // Use null as fallback
                onChange(file);
              }}
              error={errors.resume?.message}
            />
          )}
        />
        <SubmitButton type="submit" disabled={!isValid || !isDirty}>
          Submit
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ProfileManager;
