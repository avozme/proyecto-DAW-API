<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'brand_id',
    ];
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
    public function tags ()
    {
        return $this->belongsToMany(Tag::class, 'products_tags');
    }

    public function stores()
    {
        return $this->belongsToMany(Store::class, 'products_stores');
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function sales()
    {
        return $this->hasMany(Sale::class);
    }
}
