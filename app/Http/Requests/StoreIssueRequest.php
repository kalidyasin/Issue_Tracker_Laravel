<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreIssueRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'max:100'],
            'image' => ['nullable', 'image'],
            'description' => ['string', 'nullable'],
            'project_id' =>['required','exist:project,id'],
            'assigned_user_id' =>['required','exist:project,id'],
            'due_date' => ['date', 'nullable'],
            'severity' => ['required', Rule::in(['critical', 'major', 'minor','trivial'])],
            'status' => ['required', Rule::in(['open', 'in_progress', 'closed','resolved'])]
            
        ];
    }
}
