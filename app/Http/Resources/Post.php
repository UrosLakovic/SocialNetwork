<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\Rating as RatingResource;
use App\Models\User;
use App\Models\Rating;

class Post extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'user_id' => $this->user_id,
            'created_at' => date_format($this->created_at, 'd/m/Y H:i:s'),
            'updated_at' => date_format($this->updated_at, 'd/m/Y H:i:s'),
            'writer' => new UserResource(User::find($this->user_id)),
            'rating' => round(RatingResource::collection(Rating::all())
            ->whereIn('post_id', [$this->id])
            ->avg('rating'), 2)
        ];
    }
}
