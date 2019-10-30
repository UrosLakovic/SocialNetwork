<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function ratings()
    {
        return $this->hasMany(Rating::class);
    }

    public function getAverageRatingAttribute()
    {
        return round($this->ratings->avg('rating'), 2);
    }
}
